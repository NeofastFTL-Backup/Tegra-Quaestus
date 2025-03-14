//packmode: basic

ServerEvents.recipes(neofastftl => {
    neofastftl.shaped(
        Item.of('industrialforegoing:machine_frame_pity', 1),
        [
          'LSL',
          'SCS',
          'LSL'
        ],
        {
          L: 'allthecompressed:oak_log_4x',
          S: 'mysticalagriculture:supremium_ingot_block',
          C: 'minecraft:conduit'
        }
      ),
      neofastftl.shaped(
        Item.of('mysticalagriculture:machine_frame', 1),
        [
          'LSL',
          'SCS',
          'LSL'
        ],
        {
          S: 'enderio:redstone_alloy_block',
          L: '#c:storage_blocks/steel',
          C: 'industrialforegoing:machine_frame_pity'
        }
      ),
      neofastftl.shaped(
        Item.of('rftoolsbase:machine_frame', 1),
        [
          'LSL',
          'SCS',
          'LSL'
        ],
        {
          S: 'rftoolsbase:infused_enderpearl',
          L: 'rftoolsbase:infused_diamond',
          C: 'mysticalagriculture:machine_frame'
        }
      ),
      neofastftl.shaped(
        Item.of('enderio:void_chassis', 1),
        [
          'LSL',
          'SCS',
          'LSL'
        ],
        {
          S: 'allthecompressed:raw_iron_block_1x',
          L: 'enderio:octadic_capacitor',
          C: 'rftoolsbase:machine_frame'
        }
      ),
      neofastftl.shaped(
        Item.of('enderio:ensouled_chassis', 1),
        [
          'LQL',
          'SCT',
          'LQL'
        ],
        {
          S: 'mysticalagriculture:hostile_soulium_dagger',
          T: 'mysticalagriculture:passive_soulium_dagger',
          L: 'mysticalagradditions:withering_soul',
          Q: 'immersiveengineering:shader_rosequartz',
          C: 'enderio:void_chassis'
        }
      ),
      neofastftl.shaped(
        Item.of('actuallyadditions:iron_casing', 1),
        [
          'LSL',
          'SCS',
          'LSL'
        ],
        {
          S: 'actuallyadditions:diamatine_crystal_block',
          L: 'actuallyadditions:restonia_crystal_block',
          C: 'rftoolsbase:machine_frame'
        }
      ),
      neofastftl.shaped(
        Item.of('powah:dielectric_casing', 1),
        [
          'LDL',
          'SCS',
          'LDL'
        ],
        {
          S: 'minecraft:ancient_debris',
          L: 'extendedcrafting:redstone_ingot_block',
          C: 'actuallyadditions:iron_casing',
          D: 'minecraft:diamond_block'
        }
      ),
      neofastftl.shaped(
        Item.of('extendedcrafting:frame', 1),
        [
          'LDL',
          'SCS',
          'LDL'
        ],
        {
          S: 'mekanismadditions:black_plastic',
          L: 'ironfurnaces:obsidian_furnace',
          C: 'powah:dielectric_casing',
          D: 'enderio:fused_quartz_p_black'
        }
      ),
      neofastftl.shaped(
        Item.of('extendedae:machine_frame', 1),
        [
          'LDL',
          'SCS',
          'LDL'
        ],
        {
          S: 'immersiveengineering:sheetmetal_colored_white',
          L: 'pneumaticcraft:printed_circuit_board',
          C: 'extendedcrafting:frame',
          D: 'extendedae:entro_block'
        }
      )
      neofastftl.shaped(
        Item.of('mekanism:steel_casing', 1),
        [
          'LDL',
          'SCS',
          'LDL'
        ],
        {
          S: 'enderio:dark_steel_block',
          L: 'bigreactors:insanite_block',
          C: 'extendedae:machine_frame',
          D: 'enderio:dark_steel_bars'
        }
      )
      neofastftl.shaped(
        Item.of('gtceu:steam_machine_casing', 1),
        [
          'LDL',
          'SCS',
          'LDL'
        ],
        {
          S: 'sfm:cable',
          L: 'allthecompressed:sky_bronze_block_1x',
          C: 'mekanism:steel_casing',
          D: 'allthecompressed:copper_alloy_block_1x'
        }
      )
      neofastftl.shaped(
        Item.of('modular_machinery_reborn:casing_plain', 1),
        [
          'LDL',
          'SCS',
          'LDL'
        ],
        {
          S: 'justdirethings:time_wand',
          L: 'appflux:charged_redstone_block',
          C: 'gtceu:steam_machine_casing',
          D: 'extendedcrafting:enhanced_redstone_ingot_block'
        }
      )
      neofastftl.shaped(
        Item.of('modular_machinery_reborn:casing_reinforced', 1),
        [
          'LDL',
          'SCT',
          'LFL'
        ],
        {
          S: 'mekanism:pellet_polonium',
          T: 'mekanism:pellet_plutonium',
          L: 'extendedcrafting:ultimate_singularity',
          C: 'modular_machinery_reborn:casing_plain',
          D: 'powah:charged_snowball',
          F: 'mekanism:block_refined_obsidian'
        }
      )
  })