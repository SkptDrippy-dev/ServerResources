-----------------For support, scripts, and more----------------
--------------- https://discord.gg/wasabiscripts  -------------
---------------------------------------------------------------

Config.Departments['lssd'] = {
    label = 'Los Santos Sheriff\'s Department',
    permissions = {
        ['mdt.open'] = '*', -- All grades can open MDT
        -- ['mdt.open'] = { 0, 1, 2, 3, 4, 5 }, -- Example: specific grades only
        
        -- Announcements
        ['mdt.announcements.create'] = { 3, 4, 5 }, -- Grades that can create announcements
        ['mdt.announcements.edit'] = { 3, 4, 5 }, -- Grades that can edit announcements
        ['mdt.announcements.delete'] = { 4, 5 }, -- Grades that can delete announcements
        
        -- Citizens
        ['mdt.citizens.create'] = { 1, 2, 3, 4, 5 }, -- Grades that can create citizen records
        ['mdt.citizens.edit'] = { 1, 2, 3, 4, 5 }, -- Grades that can edit citizen records
        ['mdt.citizens.delete'] = { 4, 5 }, -- Grades that can delete citizen records
        
        -- Vehicles
        ['mdt.vehicles.create'] = { 1, 2, 3, 4, 5 }, -- Grades that can create vehicle records
        ['mdt.vehicles.edit'] = { 1, 2, 3, 4, 5 }, -- Grades that can edit vehicle records
        ['mdt.vehicles.delete'] = { 4, 5 }, -- Grades that can delete vehicle records
        
        -- Weapons
        ['mdt.weapons.create'] = { 1, 2, 3, 4, 5 }, -- Grades that can create weapon records
        ['mdt.weapons.edit'] = { 1, 2, 3, 4, 5 }, -- Grades that can edit weapon records
        ['mdt.weapons.delete'] = { 4, 5 }, -- Grades that can delete weapon records
        
        -- Properties
        ['mdt.properties.create'] = { 1, 2, 3, 4, 5 }, -- Grades that can create property records
        ['mdt.properties.edit'] = { 1, 2, 3, 4, 5 }, -- Grades that can edit property records
        ['mdt.properties.delete'] = { 4, 5 }, -- Grades that can delete property records
        
        -- Evidence
        ['mdt.evidence.create'] = { 1, 2, 3, 4, 5 }, -- Grades that can create evidence records
        ['mdt.evidence.edit'] = { 1, 2, 3, 4, 5 }, -- Grades that can edit evidence records
        ['mdt.evidence.delete'] = { 3, 4, 5 }, -- Grades that can delete evidence records
        ['mdt.evidence.checkout'] = { 1, 2, 3, 4, 5 }, -- Grades that can check out evidence
        ['mdt.evidence.checkin'] = { 1, 2, 3, 4, 5 }, -- Grades that can check in evidence
        
        -- Incidents
        ['mdt.incidents.create'] = { 1, 2, 3, 4, 5 }, -- Grades that can create incidents
        ['mdt.incidents.edit'] = { 1, 2, 3, 4, 5 }, -- Grades that can edit incidents
        ['mdt.incidents.delete'] = { 3, 4, 5 }, -- Grades that can delete incidents
        ['mdt.incidents.close'] = { 2, 3, 4, 5 }, -- Grades that can close incidents
        ['mdt.incidents.manual'] = { 3, 4, 5 }, -- Grades that can manually set fine/jail time
        
        -- Charges
        ['mdt.charges.create'] = { 2, 3, 4, 5 }, -- Grades that can create charges
        ['mdt.charges.edit'] = { 3, 4, 5 }, -- Grades that can edit charges
        ['mdt.charges.delete'] = { 4, 5 }, -- Grades that can delete charges
        
        -- Warrants
        ['mdt.warrants.create'] = { 2, 3, 4, 5 }, -- Grades that can create warrants
        ['mdt.warrants.edit'] = { 3, 4, 5 }, -- Grades that can edit warrants
        ['mdt.warrants.serve'] = { 1, 2, 3, 4, 5 }, -- Grades that can serve warrants
        ['mdt.warrants.cancel'] = { 3, 4, 5 }, -- Grades that can cancel warrants
        ['mdt.warrants.delete'] = { 4, 5 }, -- Grades that can delete warrants
        
        -- BOLOs
        ['mdt.bolos.create'] = { 1, 2, 3, 4, 5 }, -- Grades that can create BOLOs
        ['mdt.bolos.edit'] = { 2, 3, 4, 5 }, -- Grades that can edit BOLOs
        ['mdt.bolos.resolve'] = { 1, 2, 3, 4, 5 }, -- Grades that can resolve BOLOs
        ['mdt.bolos.delete'] = { 4, 5 }, -- Grades that can delete BOLOs
        
        -- Dispatch
        ['mdt.dispatch.view'] = '*',                  -- All grades can view dispatch
        ['mdt.dispatch.create'] = { 1, 2, 3, 4, 5 },  -- Grades that can create dispatches
        ['mdt.dispatch.delete'] = { 3, 4, 5 },        -- Grades that can delete dispatches
        ['mdt.dispatch.respond'] = '*',               -- All grades can respond to dispatches
        
        ['mdt.panic.trigger'] = '*',                  -- All grades can use panic button
    },
    color = {
        primary = { -- The number are shades, 50 is the lightest and 950 is the darkest
            [50] = "#8CF5D2",
            [100] = "#79F3CB",
            [200] = "#53F0BC",
            [300] = "#2EEDAE",
            [400] = "#13DF9B",
            [500] = "#10B981",
            [600] = "#0C855D",
            [700] = "#075239",
            [800] = "#031E15",
            [900] = "#000000",
            [950] = "#000000",
        },
    }
}