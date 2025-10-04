-- ===================================================================
-- SERVER VARIABLES & STATE MANAGEMENT
-- ===================================================================

-- Cooldown system
local cooldowns = {}

-- Get cooldowns table
function GetCooldowns()
    return cooldowns
end

-- Set player cooldown
function SetPlayerCooldown(identifier, cooldownType)
    if not cooldowns[identifier] then
        cooldowns[identifier] = {}
    end
    cooldowns[identifier][cooldownType] = os.time()
end

-- Check if player is on cooldown
function IsPlayerOnCooldown(identifier, cooldownType, cooldownTime)
    if not cooldowns[identifier] or not cooldowns[identifier][cooldownType] then
        return false
    end
    
    local currentTime = os.time()
    return (currentTime - cooldowns[identifier][cooldownType]) < cooldownTime
end

-- Clear player cooldown
function ClearPlayerCooldown(identifier, cooldownType)
    if cooldowns[identifier] then
        cooldowns[identifier][cooldownType] = nil
    end
end