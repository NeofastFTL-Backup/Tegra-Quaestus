//packmode: expert

ServerEvents.recipes(neofastftl => {
    neofastftl.shaped(
        Item.of('industrialforegoing:machine_frame_pity', 1),
        [
          'LSL',
          'SCS',
          'LSL'
        ],
        {
          L: 'minecraft:paper',
          S: 'minecraft:diamond',
          C: 'minecraft:conduit'
        }
      )
  })