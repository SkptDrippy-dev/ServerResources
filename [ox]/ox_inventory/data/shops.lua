return {
	General = {
		name = 'Shop',
		blip = {
			id = 59, colour = 69, scale = 0.8
		}, inventory = {
			{ name = 'burger', price = 10 },
			{ name = 'water', price = 10 },
			{ name = 'radio', price = 10 },
			{ name = 'phone', price = 10 },
			{ name = 'backpack', price = 10 },
		}, locations = {
			vec3(25.7, -1347.3, 29.49), -- STRAWBERRY
			vec3(-3038.71, 585.9, 7.9), -- CHUMASH 2
			vec3(373.55, 325.56, 103.56), -- VINEWOOD 
			vec3(373.55, 325.56, 103.56), -- PALETO TOP 
			vec3(1959.16, 3741.39, 32.34), -- SANDY SHORES
			vec3(2555.49, 380.83, 108.62), -- PALOMINO FWY
			vec3(2676.58, 3280.23, 55.24), -- SENORA FWY		
			vector3(-706.02, -914.6, 18.22), -- LITTLE SEOUL
			vector3(-3243.94, 1000.01, 12.83) -- CHUMASH
		}, targets = {
			{
                ped = `mp_m_shopkeep_01`,
                scenario = 'WORLD_HUMAN_IDLE',
                loc = vec3(24.48, -1347.33, 28.50), -- STRAWBERRY
                heading = 268.01,
            },
			{
                ped = `mp_m_shopkeep_01`,
                scenario = 'WORLD_HUMAN_IDLE',
                loc = vec3(-3038.92, 584.58, 6.90), -- CHUMASH 2
                heading = 17.62,
            },   
			{
                ped = `mp_m_shopkeep_01`,
                scenario = 'WORLD_HUMAN_IDLE',
                loc = vec3(372.58, 326.40, 102.60), -- VINEWOOD
                heading = 262.31,
            },
			{
                ped = `mp_m_shopkeep_01`,
                scenario = 'WORLD_HUMAN_IDLE',
                loc = vec3(549.13, 2671.34, 41.15 ), -- HARMONY
                heading = 94.52,
            },
			{
                ped = `mp_m_shopkeep_01`,
                scenario = 'WORLD_HUMAN_IDLE',
                loc = vec3(1164.73, -322.60, 68.21 ), -- MIRROR PARK
                heading = 101.82,
            },
			{
                ped = `mp_m_shopkeep_01`,
                scenario = 'WORLD_HUMAN_IDLE',
                loc = vec3(1698.10, 4922.85, 41.06 ), -- GRAPESEED   1727.78, 6415.20, 35.04, 235.37
                heading = 326.42,
            },
			{
                ped = `mp_m_shopkeep_01`,
                scenario = 'WORLD_HUMAN_IDLE',
                loc = vec3(1727.78, 6415.20, 34.04 ), -- PALETO TOP    
                heading = 235.37,
            },
			{
                ped = `mp_m_shopkeep_01`,
                scenario = 'WORLD_HUMAN_IDLE',
                loc = vec3(1960.06, 3739.98, 31.34 ), -- SANDY SHORES 
                heading = 302.76,
            },
			{
                ped = `mp_m_shopkeep_01`,
                scenario = 'WORLD_HUMAN_IDLE',
                loc = vec3(2557.32, 380.74, 107.62 ), -- PALOMINO FWY
                heading = 349.27,
            },
			{
                ped = `mp_m_shopkeep_01`,
                scenario = 'WORLD_HUMAN_IDLE',
				loc = vec3(2678.02, 3279.35, 54.24 ), -- SENORA FWY
                heading = 328.95,
            },
			{
                ped = `mp_m_shopkeep_01`,
                scenario = 'WORLD_HUMAN_IDLE',
                loc = vec3(-706.16, -913.53, 18.22 ), -- LITTLE SEOUL
                heading = 84.67,
            },
			{
                ped = `mp_m_shopkeep_01`,
                scenario = 'WORLD_HUMAN_IDLE',
                loc = vec3(-3242.34, 1000.01, 11.83 ), -- CHUMASH
                heading = 353.14,
            }

		}
	},
	Ammunation = {
		name = 'Ammunation',   
		blip = {
			id = 110, colour = 69, scale = 0.8
		}, inventory = {
			{ name = 'ammo-9', price = 5, },
			{ name = 'WEAPON_KNIFE', price = 200 },
			{ name = 'WEAPON_BAT', price = 100 },
			{ name = 'WEAPON_PISTOL', price = 1000, metadata = { registered = true }, license = 'weapon' }
		}, locations = {
			vec3(22.56, -1109.89, 29.80)
		}, targets = {
			
			 	{
                ped = `s_m_y_ammucity_01`,
                scenario = 'WORLD_HUMAN_IDLE',
                loc = vec3(22.31, -1105.34, 28.80 ), -- main
                heading = 168.62,
            }
		}
	},

	PoliceArmoury = {
		name = 'Police Armoury',
		groups = shared.police,
		blip = {
			id = 110, colour = 84, scale = 0.8
		}, inventory = {
			{ name = 'ammo-9', price = 5, },
			{ name = 'ammo-rifle', price = 5, },
			{ name = 'WEAPON_FLASHLIGHT', price = 200 },
			{ name = 'WEAPON_NIGHTSTICK', price = 100 },
			{ name = 'WEAPON_PISTOL', price = 500, metadata = { registered = true, serial = 'POL' }, license = 'weapon' },
			{ name = 'WEAPON_CARBINERIFLE', price = 1000, metadata = { registered = true, serial = 'POL' }, license = 'weapon', grade = 3 },
			{ name = 'WEAPON_STUNGUN', price = 500, metadata = { registered = true, serial = 'POL'} }
		}, locations = {
			vec3(451.51, -979.44, 30.68)
		}, targets = {
			{ loc = vec3(453.21, -980.03, 30.68), length = 0.5, width = 3.0, heading = 270.0, minZ = 30.5, maxZ = 32.0, distance = 6 }
		}
	},

	Medicine = {
		name = 'Medicine Cabinet',
		groups = {
			['ambulance'] = 0
		},
		blip = {
			id = 403, colour = 69, scale = 0.8
		}, inventory = {
			{ name = 'medikit', price = 26 },
			{ name = 'bandage', price = 5 }
		}, locations = {
			vec3(306.3687, -601.5139, 43.28406)
		}, targets = {

		}
	},

	BlackMarketArms = {
		name = 'Black Market (Arms)',
		inventory = {
			{ name = 'WEAPON_DAGGER', price = 5000, metadata = { registered = false	}, currency = 'black_money' },
			{ name = 'WEAPON_CERAMICPISTOL', price = 50000, metadata = { registered = false }, currency = 'black_money' },
			{ name = 'at_suppressor_light', price = 50000, currency = 'black_money' },
			{ name = 'ammo-rifle', price = 1000, currency = 'black_money' },
			{ name = 'ammo-rifle2', price = 1000, currency = 'black_money' }
		}, locations = {
			vec3(309.09, -913.75, 56.46)
		}, targets = {

		}
	},

	
}
