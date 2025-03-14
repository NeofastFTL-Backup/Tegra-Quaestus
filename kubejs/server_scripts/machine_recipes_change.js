//packmode: basic

ServerEvents.recipes(neofastftl => {
  neofastftl.remove({ output: 'actuallyadditions:atomic_reconstructor' })
  neofastftl.remove({ output: 'industrialforegoing:machine_frame_pity' })
  neofastftl.remove({ output: 'mysticalagriculture:machine_frame' })
  neofastftl.remove({ output: 'rftoolsbase:machine_frame' })
  neofastftl.remove({ output: 'enderio:void_chassis' })
  neofastftl.remove({ output: 'enderio:ensouled_chassis' })
  neofastftl.remove({ output: 'actuallyadditions:iron_casing' })
  neofastftl.remove({ output: 'powah:dielectric_casing' })
  neofastftl.remove({ output: 'extendedcrafting:frame' })
  neofastftl.remove({ output: 'extendedae:machine_frame' })
  neofastftl.remove({ output: 'mekanism:steel_casing' })
  neofastftl.remove({ output: 'gtceu:steam_machine_casing' })  
  neofastftl.remove({ id: 'gtceu:assembler/casing_bronze_bricks' })  
  neofastftl.remove({ output: 'modular_machinery_reborn:casing_plain' })  
  neofastftl.remove({ output: 'modular_machinery_reborn:casing_reinforced' })  
  neofastftl.remove({ output: 'mekanism:enrichment_chamber' })  
    neofastftl.shaped(
        Item.of('actuallyadditions:atomic_reconstructor', 1),
        [
          'LSL',
          'SCS',
          'LSL'
        ],
        {
          L: 'minecraft:iron_ingot',
          S: 'minecraft:redstone',
          C: 'minecraft:dragon_egg'
        }
    )

    neofastftl.shaped(
      Item.of('mekanism:enrichment_chamber', 1),
      [
        'LWL',
        'SCS',
        'LWL'
      ],
      {
        L: 'minecraft:redstone',
        S: 'minecraft:iron_ingot',
        W: 'mekanism:basic_control_circuit',
        C: 'enderio:void_chassis'
      }
  )
  })