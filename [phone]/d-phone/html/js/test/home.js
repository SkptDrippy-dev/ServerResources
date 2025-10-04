function clickElement(selector, maxAttempts = 5, attemptInterval = 200) {
    let attempts = 0;

    const attemptClick = () => {
        const element = document.querySelector(selector);
        if (element) {
            element.click();
            console.log(`Clicked element: ${selector}`);
        } else if (attempts < maxAttempts) {
            attempts++;
            console.log(`Element not found, retrying... Attempt ${attempts}`);
            setTimeout(attemptClick, attemptInterval);
        } else {
            console.log(`Failed to click element: ${selector}. Max attempts reached.`);
        }
    };

    attemptClick();
}

function clickElementByText(searchText, elementType = '*') {
    const elements = document.querySelectorAll(elementType);
    for (let element of elements) {
        if (element.textContent.trim() === searchText) {
            element.click();
            console.log(`Clicked on element containing text: "${searchText}"`);
            return;
        }
    }
    console.log(`No element containing text "${searchText}" was found.`);
}

function isElementVisibleAsync(selector, waitTime = 1000) {
    return new Promise((resolve, reject) => {
        const checkVisibility = () => {
            const element = document.querySelector(selector);

            if (!element) {
                console.log(`Element not found: ${selector}`);
                resolve(false);
                return;
            }

            const style = window.getComputedStyle(element);
            if (style.display === 'none' || style.visibility === 'hidden') {
                setTimeout(checkVisibility, waitTime); // Wait and retry
                return;
            }

            const rect = element.getBoundingClientRect();
            const inViewport = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );

            resolve(inViewport);
        };

        checkVisibility();
    });
}

async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setInputValueAsync(selector, value, waitTime = 1000, maxAttempts = 5) {
    return new Promise((resolve, reject) => {
        let attempts = 0;

        const trySetInputValue = () => {
            const element = document.querySelector(selector);
            if (element) {
                const style = window.getComputedStyle(element);
                const isVisible = style.display !== 'none' && style.visibility !== 'hidden';
                if (isVisible) {
                    element.value = value;
                    console.log(`Value set for ${selector}: ${value}`);
                    resolve(true);
                } else {
                    if (attempts < maxAttempts) {
                        console.log(`Element ${selector} not visible yet, retrying...`);
                        attempts++;
                        setTimeout(trySetInputValue, waitTime);
                    } else {
                        console.log(`Element ${selector} not visible after ${maxAttempts} attempts.`);
                        reject(`Failed to set value. Element not visible.`);
                    }
                }
            } else {
                if (attempts < maxAttempts) {
                    console.log(`Element ${selector} not found, retrying...`);
                    attempts++;
                    setTimeout(trySetInputValue, waitTime);
                } else {
                    console.log(`Element ${selector} not found after ${maxAttempts} attempts.`);
                    reject(`Failed to set value. Element not found.`);
                }
            }
        };

        trySetInputValue();
    });
}

const Test = {
}

Test.Call = async () => {
    clickElement('#applicationCall');

    let isVisible = await isElementVisibleAsync('#call-home', 2000);
    if (isVisible) {
        console.log('Element is visible');
    } else {
        console.log('Element is not visible');
    }

    clickElement('.call-input');
    clickElement('.call-input');
    clickElement('.call-input');

    await wait(1000);

    clickElement('.call-input.green');

    isVisible = await isElementVisibleAsync('#call-type-home', 2000);
    if (isVisible) {
        console.log('call-type-home is visible');
    } else {
        console.log('ERROR: call-type-home is not visible');
    }

    await wait(1000);
    isVisible = await isElementVisibleAsync('.phone-applications', 2000);
    if (isVisible) {
        console.log('call-type-home is visible');
    } else {
        console.log('ERROR: call-type-home is not visible');
    }

    await Test.AddContact()
}

Test.AddContact = async () => {
    try {
        clickElement('#applicationContact');

        let isVisible = await isElementVisibleAsync('#contacts-home', 2000);
        if (isVisible) {
            console.log('contacts-home is visible');
        } else {
            console.log('contacts-home is not visible');
        }

        clickElement('#contacts-home-add');

        await wait(1000);

        isVisible = await isElementVisibleAsync('#addcontactpage', 2000);
        if (isVisible) {
            console.log('addcontactpage is visible');
        } else {
            console.log('ERROR: addcontactpage is not visible');
        }

        await setInputValueAsync('#addcontactpage-nameinput', 'Test', 500, 3);
        await setInputValueAsync('#addcontactpage-lastname', 'Contact', 500, 3);
        await setInputValueAsync('#addcontactpage-number', '9194002', 500, 3);

        await wait(1000);

        clickElement('#addcontactpage-submit');

        await wait(1000);

        await Test.SendMessage();
    } catch (error) {
        console.error(error);
    }
}

Test.SendMessage = async () => {
    try {
        console.log("Test.SendMessage ")
        Home();

        await wait(1000);
        clickElement('#applicationContact');
        await wait(2000);

        let isVisible = await isElementVisibleAsync('#contacts-home-add', 2000);
        if (isVisible) {
            console.log('contacts-home is visible');
        } else {
            throw new Error('contacts-home is not visible');
        }

        await wait(1000);

        clickElementByText('Test Contact', '.contact-element');

        await wait(2000);


        isVisible = await isElementVisibleAsync('#contactpage', 2000);
        if (isVisible) {
            await wait(1000);
            console.log('contactpage is visible');
            clickElement('#contactpage-message');
            await wait(1000);

            isVisible = await isElementVisibleAsync('#messages-chat', 2000);
            if (isVisible) {
                console.log('messages-chat is visible');

                await setInputValueAsync('#messages-chat-input', 'Test Message', 500, 3);
                await wait(1000);
                clickElement('#messages-chat-sendmessage');
                await wait(1000);

                await Test.RemoveContact();

            } else {
                console.log('messages-chat is not visible');
            }
        } else {
            console.log('contactpage is not visible');
        }



    } catch (error) {
        console.error(error);
    }
}

Test.RemoveContact = async () => {
    console.log("Test.RemoveContact")
    try {
        Home();
        await wait(1000);
        clickElement('#applicationContact');
        await wait(1000);

        let isVisible = await isElementVisibleAsync('#contacts-home', 2000);
        if (isVisible) {
            console.log('contacts-home is visible');
        } else {
            console.log('contacts-home is not visible');
            Home();
            clickElement('#applicationContact');
        }

        clickElementByText('Test Contact', '.contact-element');
        await wait(1000);

        isVisible = await isElementVisibleAsync('#contactpage', 2000);
        if (isVisible) {
            console.log('contactpage is visible');
            clickElement('#contactpage-delete');
        } else {
            console.log('contactpage is not visible');
        }
    } catch (error) {
        console.error(error);
    }
}