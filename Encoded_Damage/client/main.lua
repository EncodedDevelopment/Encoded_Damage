function showDamageImage()
    SendNUIMessage({
        action = 'showImage'
    })
end

AddEventHandler('gameEventTriggered', function(eventName, eventData)
    if eventName == 'CEventNetworkEntityDamage' then
        local victim = eventData[1]
        local attacker = eventData[2]
        
        if victim == PlayerPedId() then
            showDamageImage()
        end
    end
end)

RegisterNUICallback('nuiCallback', function(data, cb)
    cb('ok')
end)

RegisterCommand('damage', function()
    TriggerEvent('gameEventTriggered', 'CEventNetworkEntityDamage', { PlayerPedId(), 0 })
end, false)
