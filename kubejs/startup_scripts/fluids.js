StartupEvents.registry('fluid', event => {
	event.create('kubejs:mana').displayName('Mana').stillTexture('kubejs:fluid/mana').flowingTexture('kubejs:fluid/mana')
	event.create('kubejs:blood').displayName('Blood').stillTexture('kubejs:fluid/blood').flowingTexture('kubejs:fluid/blood')
	event.create('kubejs:holy_water').displayName('Holy Water').stillTexture('kubejs:fluid/holy_water').flowingTexture('kubejs:fluid/holy_water')
})