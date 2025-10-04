return {
    
----- FOOD

     ['burger'] = {
        label = 'Burger',
        weight = 220,
        client = {
            status = { hunger = 200000 },
            anim = 'eating',
            prop = 'burger',
            usetime = 2500,
            notification = 'You ate a delicious burger'
        },
    },

    ['mustard'] = {
        label = 'Mustard',
        weight = 500,
        client = {
            status = { hunger = 25000, thirst = 25000 },
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
            prop = { model = `prop_food_mustard`, pos = vec3(0.01, 0.0, -0.07), rot = vec3(1.0, 1.0, -1.5) },
            usetime = 2500,
            notification = 'You... drank mustard'
        }
    },

----- DRINK

     ['water'] = {
        label = 'Water',
        weight = 500,
        client = {
            status = { thirst = 200000 },
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
            prop = { model = `prop_ld_flow_bottle`, pos = vec3(0.03, 0.03, 0.02), rot = vec3(0.0, 0.0, -1.5) },
            usetime = 2500,
            cancel = true,
            notification = 'You drank some refreshing water'
        }
    },

    ['sprunk'] = {
        label = 'Sprunk',
        weight = 350,
        client = {
            status = { thirst = 200000 },
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
            prop = { model = `prop_ld_can_01`, pos = vec3(0.01, 0.01, 0.06), rot = vec3(5.0, 5.0, -180.5) },
            usetime = 2500,
            notification = 'You quenched your thirst with a sprunk'
        }
    },

----- PLAYER CONSUMEABLE

    ['panties'] = {
        label = 'Knickers',
        weight = 10,
        consume = 0,
        client = {
            status = { thirst = -100000, stress = -25000 },
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
            prop = { model = `prop_cs_panties_02`, pos = vec3(0.03, 0.0, 0.02), rot = vec3(0.0, -13.5, -1.5) },
            usetime = 2500,
        }
    },

----- HEALTH

     ['bandage'] = {
        label = 'Bandage',
        weight = 115,
    },

----- CURRENCY

    ['money'] = {
        label = 'Money',
    },

    ['black_money'] = {
        label = 'Dirty Money',
    },





----- PLAYER ITEMS

      ['radio'] = {
        label = 'Radio',
        weight = 1000,
        allowArmed = true,
        consume = 0,
        client = {
            event = 'mm_radio:client:use'
        }
    },

        ['id_card'] = {
        label = 'Identification Card',
    },

    ['driver_license'] = {
        label = 'Drivers License',
    },

    ['weaponlicense'] = {
        label = 'Weapon License',
    },

    ['lawyerpass'] = {
        label = 'Lawyer Pass',
    },

    ['lockpick'] = {
        label = 'Lockpick',
        weight = 160,
    },

    ['advancedlockpick'] = {
        label = 'Advanced Lockpick',
        weight = 500,
    },

    ['garbage'] = {
        label = 'Garbage',
    },

    ['paperbag'] = {
        label = 'Paper Bag',
        weight = 1,
        stack = false,
        close = false,
        consume = 0
    },

----- Clothing

     ['parachute'] = {
        label = 'Parachute',
        weight = 8000,
        stack = false,
        client = {
            anim = { dict = 'clothingshirt', clip = 'try_shirt_positive_d' },
            usetime = 1500
        }
    },

    ['armour'] = {
        label = 'Bulletproof Vest',
        weight = 3000,
        stack = false,
        client = {
            anim = { dict = 'clothingshirt', clip = 'try_shirt_positive_d' },
            usetime = 3500
        }
    },

      ['clothing'] = {
        label = 'Clothing',
        consume = 0,
    },

----- CAR STUFF

      ['jerry_can'] = {
        label = 'Jerrycan',
        weight = 3000,
    },

        ['cleaningkit'] = {
        label = 'Cleaning Kit',
        weight = 500,
    },

    ['repairkit'] = {
        label = 'Repair Kit',
        weight = 2500,
    },

    ['advancedrepairkit'] = {
        label = 'Advanced Repair Kit',
        weight = 4000,
    },

---- WASABI AMBULANCE

    ['medikit'] = { 
			label = 'Medikit',
			weight = 165,
			stack = true,
			close = true,
		},
		['medbag'] = {
			label = 'Medical Bag',
			weight = 165,
			stack = false,
			close = true,
		},
	
		['tweezers'] = {
			label = 'Tweezers',
			weight = 2,
			stack = true,
			close = true,
		},
	
		['suturekit'] = {
			label = 'Suture Kit',
			weight = 15,
			stack = true,
			close = true,
		},
	
		['icepack'] = {
			label = 'Ice Pack',
			weight = 29,
			stack = true,
			close = true,
		},
	
		['burncream'] = {
			label = 'Burn Cream',
			weight = 19,
			stack = true,
			close = true,
		},
	
		['defib'] = {
			label = 'Defibrillator',
			weight = 225,
			stack = false,
			close = true,
		},
	
		['sedative'] = {
			label = 'Sedative',
			weight = 15,
			stack = true,
			close = true,
		},

		['morphine30'] = {
			label = 'Morphine 30MG',
			weight = 2,
			stack = true,
			close = true,
		},

		['morphine15'] = {
			label = 'Morphine 15MG',
			weight = 2,
			stack = true,
			close = true,
		},

		['perc30'] = {
			label = 'Percocet 30MG',
			weight = 2,
			stack = true,
			close = true,
		},

		['perc10'] = {
			label = 'Percocet 10MG',
			weight = 2,
			stack = true,
			close = true,
		},

		['perc5'] = {
			label = 'Percocet 5MG',
			weight = 2,
			stack = true,
			close = true,
		},

		['vic10'] = {
			label = 'Vicodin 10MG',
			weight = 2,
			stack = true,
			close = true,
		},

		['vic5'] = {
			label = 'Vicodin 5MG',
			weight = 2,
			stack = true,
			close = true,
		},
	
		['recoveredbullet'] = {
			label = 'Recovered Bullet',
			weight = 1,
			stack = true,
			close = false,
		},

----- WASABI CARLOCK

 ['carkeys'] = {
    label = 'Car Keys',
    weight = 100,
    stack = false,
    close = true,
},

----- WASABI CRUTCH

    ['crutch'] = {
		label = 'Crutch',
		weight = 165,
		stack = false,
		close = true,
	},
	['wheelchair'] = {
		label = 'Wheelchair',
		weight = 540,
		stack = false,
		close = true,
	},

----- WASABI POLICE

    	['handcuffs'] = {
			label = 'Hand Cuffs',
			weight = 2,
			stack = true,
			close = true,
		},

	['bobby_pin'] = {
			label = 'Bobby Pin',
			weight = 2,
			stack = true,
			close = true,
		},

	['tracking_bracelet '] = {
			label = 'Tracking Bracelet',
			weight = 2,
			stack = true,
			close = true,
		},
	

----- AMMONIA

['ammonia'] = {
    label = 'Ammonia',
    weight = 500,
    stack = true,
},

['sodium_benzoate'] = {
    label = 'Sodium benzoate',
    weight = 750,
    stack = true,
},

----- METH
['meth_tray'] = {
    label = 'Meth tray',
    weight = 1000,
    stack = true,
},

['meth'] = {
    label = 'Meth',
    weight = 1,
    stack = true,
},

['meth_bag'] = {
    label = 'Meth bag',
    weight = 50,
    stack = true,
},

['plastic_bag'] = {
    label = 'Plastic bag',
    weight = 40,
    stack = true,
},

['meth_syringe'] = {
    label = 'Meth syringe',
    weight = 75,
    stack = true,
},

['meth_table'] = {
    label = 'Meth table',
    weight = 2250,
    stack = false
},

----- COKE

    -- Cocaine related items
['coke_seed'] = {
    label = 'Cocaine seed',
    weight = 10,
    stack = true,
},

['coke_leaf'] = {
    label = 'Cocaine leaf',
    weight = 50,
    stack = true,
},

['coke_paste'] = {
    label = 'Cocaine paste',
    weight = 150,
    stack = true,
},

['coke'] = {
    label = 'Cocaine',
    weight = 1,
    stack = true,
},

['coke_bag'] = {
    label = 'Cocaine bag',
    weight = 50,
    stack = true,
},

['coke_brick'] = {
    label = 'Cocaine brick',
    weight = 200,
    stack = true,
},

['coke_doll'] = {
    label = 'Cocaine doll',
    weight = 500,
    stack = true,
},

['coke_table'] = {
    label = 'Coke table',
    weight = 2250,
    stack = false
},

----- WEED
    -- Weed related items
['weed_seed'] = {
    label = 'Weed seed',
    weight = 5,
    stack = true,
},

['weed_pot'] = {
    label = 'Flower Pot',
    weight = 500,
    stack = true,
},

['trowel'] = {
    label = 'Trowel',
    weight = 150,
    stack = true,
},

['weed_bud'] = {
    label = 'Weed bud',
    weight = 25,
    stack = true,
},

['clean_weed_bud'] = {
    label = 'Clean weed bud',
    weight = 20,
    stack = true,
},

['cookie_dough'] = {
    label = 'Cookie dough',
    weight = 200,
    stack = true
},

['weed_cookie'] = {
    label = 'Weed cookie',
    weight = 50,
    stack = true
},

['weed_bag'] = {
    label = 'Weed bag',
    weight = 50,
    stack = true,
},

['weed_joint'] = {
    label = 'Weed joint',
    weight = 15,
    stack = true,
},

['weed_papers'] = {
    label = 'Weed papers',
    weight = 5,
    stack = true,
},

['weed_table'] = {
    label = 'Weed table',
    weight = 2250,
    stack = false
},

----- HEROIN
['poppy_seeds'] = {
    label = 'Poppy seeds',
    weight = 5,
    stack = true,
},

['poppy_plant'] = {
    label = 'Poppy plant',
    weight = 100,
    stack = true,
},

['opium'] = {
    label = 'Opium',
    weight = 1,
    stack = true,
},

['heroin'] = {
    label = 'Heroin',
    weight = 1,
    stack = true,
},

['heroin_bag'] = {
    label = 'Heroin bag',
    weight = 50,
    stack = true,
},

['heroin_syringe'] = {
    label = 'Heroin syringe',
    weight = 75,
    stack = true,
},

['syringe'] = {
    label = 'Syringe',
    weight = 25,
    stack = true,
},

----- LSD

['ergot_fungus'] = {
    label = 'Ergot fungus',
    weight = 50,
    stack = true,
},

['generic_leaf'] = {
    label = 'Leaf',
    weight = 20,
    stack = true,
},

['lsd_liquid'] = {
    label = 'LSD liquid',
    weight = 25,
    stack = true,
},

['lsd'] = {
    label = 'LSD',
    weight = 1,
    stack = true,
},

['art_papers'] = {
    label = 'Art papers',
    weight = 5,
    stack = true,
},

---- ECSTASY
['safrole_oil'] = {
    label = 'Safrole oil',
    weight = 300,
    stack = true,
},

['ecstasy_crystals'] = {
    label = 'Ecstasy crystals',
    weight = 1,
    stack = true,
},

['ecstasy_pill'] = {
    label = 'Ecstasy pill',
    weight = 15,
    stack = true,
},

----- MUSHROOM

-- Mushroom related items
['mushrooms'] = {
    label = 'Mushrooms',
    weight = 1,
    stack = true,
},

['mushroom_powder'] = {
    label = 'Mushroom powder',
    weight = 1,
    stack = true,
},

['chocolate_chips'] = {
    label = 'Chocolate chips',
    weight = 30,
    stack = true,
},

['mushroom_chocolate'] = {
    label = 'Mushroom chocolate',
    weight = 45,
    stack = true,
},

-- KETAMINE
['anesthetic'] = {
    label = 'anesthetic',
    weight = 200,
    stack = true,
},

['ketamine'] = {
    label = 'Ketamine',
    weight = 1,
    stack = true,
},

['ketamine_bag'] = {
    label = 'Ketamine bag',
    weight = 50,
    stack = true,
},

----- CRACK

-- Crack related items
['baking_soda'] = {
    label = 'Baking soda',
    weight = 100,
    stack = true,
},

['crack'] = {
    label = 'Crack',
    weight = 1,
    stack = true,
},

['crack_bag'] = {
    label = 'Crack bag',
    weight = 50,
    stack = true,
},

['crack_pipe'] = {
    label = 'Crack pipe',
    weight = 150,
    stack = true,
},

['crack_syringe'] = {
    label = 'Crack syringe',
    weight = 75,
    stack = true,
},

['pipe'] = {
    label = 'Pipe',
    weight = 100,
    stack = true,
},

-- FENTANYL
['npp_chemical'] = {
    label = 'NPP chemical',
    weight = 300,
    stack = true,
},

['aniline_solution'] = {
    label = 'Aniline solution',
    weight = 250,
    stack = true,
},

['fentanyl'] = {
    label = 'Fentanyl',
    weight = 1,
    stack = true,
},

['fentanyl_bag'] = {
    label = 'Fentanyl bag',
    weight = 25,
    stack = true,
},

---- OTHER DRUG RELATED ITEMS

['chem_table'] = {
    label = 'Chemistry table',
    weight = 2250,
    stack = false
},

['burner_phone'] = {
    label = 'Burner phone',
    weight = 200,
    stack = true
},

['light1'] = {
    label = 'Portable Lamp',
    weight = 2000,
    stack = true
},

['light2'] = {
    label = 'Portable Lamp',
    weight = 2000,
    stack = true
},

['fertilizer'] = {
    label = 'Fertilizer',
    weight = 250,
    stack = true
},

['water_can'] = {
    label = 'Watering can',
    weight = 250,
    stack = true
},

}
