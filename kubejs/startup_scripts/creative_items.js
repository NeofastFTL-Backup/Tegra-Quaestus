StartupEvents.registry('block', event => {
	event.create('creative_casing').displayName('Creative Casing').texture('kubejs:block/creative_casing')
	event.create('creative_frame').displayName('Creative Frame').texture('kubejs:block/creative_frame')
})
StartupEvents.registry('item', event => {
	event.create('rotten_infinity').displayName('Rotten Infinity').texture('kubejs:item/rotten_infinity').glow(true);
})