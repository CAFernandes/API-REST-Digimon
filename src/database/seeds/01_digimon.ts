import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('digimon').insert([
    {
      name: "Koromon",
      level: 2
    },
    {
      name: "Tsunomon",
      level: 2
    },
    {
      name: "Yokomon",
      level: 2
    },
    {
      name: "Motimon",
      level: 2
    },
    {
      name: "Tanemon",
      level: 2
    },
    {
      name: "Bukamon",
      level: 2
    },
    {
      name: "Tokomon",
      level: 2
    },
    {
      name: "Agumon",
      level: 3
    },
    {
      name: "Gabumon",
      level: 3
    },
    {
      name: "Biyomon",
      level: 3
    },
    {
      name: "Tentomon",
      level: 3
    },
    {
      name: "Palmon",
      level: 3
    },
    {
      name: "Gomamon",
      level: 3
    },
    {
      name: "Patamon",
      level: 3
    },
    {
      name: "Kuwagamon",
      level: 4
    },
    {
      name: "Greymon",
      level: 4
    },
    {
      name: "Shellmon",
      level: 4
    },
    {
      name: "Garurumon",
      level: 4
    },
    {
      name: "Seadramon",
      level: 4
    },
    {
      name: "Monochromon",
      level: 4
    },
    {
      name: "Birdramon",
      level: 4
    },
    {
      name: "Meramon",
      level: 4
    },
    {
      name: "Kabuterimon",
      level: 4
    },
    {
      name: "Andromon",
      level: 5
    },
    {
      name: "Togemon",
      level: 4
    },
    {
      name: "Numemon",
      level: 4
    },
    {
      name: "Monzaemon",
      level: 5
    },
    {
      name: "Ikkakumon",
      level: 4
    },
    {
      name: "Unimon",
      level: 4
    },
    {
      name: "Leomon",
      level: 4
    },
    {
      name: "Ogremon",
      level: 4
    },
    {
      name: "Devimon",
      level: 4
    },
    {
      name: "Frigimon",
      level: 4
    },
    {
      name: "Mojyamon",
      level: 4
    },
    {
      name: "Sukamon",
      level: 4
    },
    {
      name: "Centarumon",
      level: 4
    },
    {
      name: "Bakemon",
      level: 4
    },
    {
      name: "Elecmon",
      level: 3
    },
    {
      name: "Botamon",
      level: 1
    },
    {
      name: "Punimon",
      level: 1
    },
    {
      name: "Poyomon",
      level: 1
    },
    {
      name: "Yuramon",
      level: 1
    },
    {
      name: "Angemon",
      level: 4
    },
    {
      name: "Whamon",
      level: 4
    },
    {
      name: "Drimogemon",
      level: 4
    },
    {
      name: "Etemon",
      level: 5
    },
    {
      name: "Gazimon",
      level: 3
    },
    {
      name: "Pagumon",
      level: 2
    },
    {
      name: "SkullGreymon",
      level: 5
    },
    {
      name: "Kokatorimon",
      level: 4
    },
    {
      name: "Tyrannomon",
      level: 4
    },
    {
      name: "Piximon",
      level: 5
    },
    {
      name: "Datamon",
      level: 5
    },
    {
      name: "MetalGreymon",
      level: 5
    },
    {
      name: "DemiDevimon",
      level: 3
    },
    {
      name: "WereGarurumon",
      level: 5
    },
    {
      name: "Digitamamon",
      level: 5
    },
    {
      name: "Vegiemon",
      level: 4
    },
    {
      name: "Myotismon",
      level: 5
    },
    {
      name: "Vademon",
      level: 5
    },
    {
      name: "Pabumon",
      level: 1
    },
    {
      name: "Gekomon",
      level: 4
    },
    {
      name: "Otamamon",
      level: 3
    },
    {
      name: "ShogunGekomon",
      level: 5
    },
    {
      name: "Garudamon",
      level: 5
    },
    {
      name: "Flymon",
      level: 4
    },
    {
      name: "Gatomon",
      level: 4
    },
    {
      name: "Nanimon",
      level: 4
    },
    {
      name: "Devidramon",
      level: 4
    },
    {
      name: "Dokugumon",
      level: 4
    },
    {
      name: "Mammothmon",
      level: 5
    },
    {
      name: "Gesomon",
      level: 4
    },
    {
      name: "Raremon",
      level: 4
    },
    {
      name: "SkullMeramon",
      level: 5
    },
    {
      name: "Wizardmon",
      level: 4
    },
    {
      name: "Pumpkinmon",
      level: 5
    },
    {
      name: "Gotsumon",
      level: 3
    },
    {
      name: "Lillymon",
      level: 5
    },
    {
      name: "Phantomon",
      level: 5
    },
    {
      name: "DarkTyrannomon",
      level: 4
    },
    {
      name: "Gizamon",
      level: 3
    },
    {
      name: "Zudomon",
      level: 5
    },
    {
      name: "MegaSeadramon",
      level: 5
    },
    {
      name: "Angewomon",
      level: 5
    },
    {
      name: "Tuskmon",
      level: 4
    },
    {
      name: "Snimon",
      level: 4
    },
    {
      name: "MegaKabuterimon",
      level: 5
    },
    {
      name: "MagnaAngemon",
      level: 5
    },
    {
      name: "VenomMyotismon",
      level: 6
    },
    {
      name: "WarGreymon",
      level: 6
    },
    {
      name: "MetalGarurumon",
      level: 6
    },
    {
      name: "Nyaromon",
      level: 2
    },
    {
      name: "Salamon",
      level: 3
    },
    {
      name: "Parrotmon",
      level: 5
    },
    {
      name: "Chuumon",
      level: 3
    },
    {
      name: "MetalSeadramon",
      level: 6
    },
    {
      name: "Machinedramon",
      level: 6
    },
    {
      name: "Piedmon",
      level: 6
    },
    {
      name: "Puppetmon",
      level: 6
    },
    {
      name: "Scorpiomon",
      level: 5
    },
    {
      name: "Divermon",
      level: 5
    },
    {
      name: "Kiwimon",
      level: 4
    },
    {
      name: "Mushroomon",
      level: 3
    },
    {
      name: "Blossomon",
      level: 5
    },
    {
      name: "Floramon",
      level: 3
    },
    {
      name: "Deramon",
      level: 5
    },
    {
      name: "Cherrymon",
      level: 5
    },
    {
      name: "Garbagemon",
      level: 5
    },
    {
      name: "MetalEtemon",
      level: 6
    },
    {
      name: "SaberLeomon",
      level: 6
    },
    {
      name: "RedVegiemon",
      level: 4
    },
    {
      name: "Mekanorimon",
      level: 4
    },
    {
      name: "Tankmon",
      level: 4
    },
    {
      name: "Hagurumon",
      level: 3
    },
    {
      name: "WaruMonzaemon",
      level: 5
    },
    {
      name: "LadyDevimon",
      level: 5
    },
    {
      name: "Vilemon",
      level: 4
    },
    {
      name: "Apocalymon",
      level: 6
    },
    {
      name: "Kunemon",
      level: 3
    },
    {
      name: "Musyamon",
      level: 4
    },
    {
      name: "Starmon",
      level: 4
    },
    {
      name: "HerculesKabuterimon",
      level: 6
    },
    {
      name: "Candlemon",
      level: 3
    },
    {
      name: "Hanumon",
      level: 4
    },
    {
      name: "Kokuwamon",
      level: 3
    },
    {
      name: "Revolvermon",
      level: 4
    },
    {
      name: "Plesiomon",
      level: 6
    },
    {
      name: "Megadramon",
      level: 5
    },
    {
      name: "BlueMeramon",
      level: 4
    },
    {
      name: "Magnadramon",
      level: 6
    },
    {
      name: "Gorillamon",
      level: 4
    },
    {
      name: "Syakomon",
      level: 3
    },
    {
      name: "MarineAngemon",
      level: 6
    },
    {
      name: "Boltmon",
      level: 6
    },
    {
      name: "Mamemon",
      level: 5
    },
    {
      name: "ExTyrannomon",
      level: 5
    },
    {
      name: "Veedramon",
      level: 4
    },
    {
      name: "AeroVeedramon",
      level: 5
    },
    {
      name: "Phoenixmon",
      level: 6
    },
    {
      name: "Betamon",
      level: 3
    },
    {
      name: "Guardromon",
      level: 4
    },
    {
      name: "Penguinmon",
      level: 3
    },
    {
      name: "PlatinumSukamon",
      level: 4
    },
    {
      name: "Psychemon",
      level: 3
    },
    {
      name: "Tsukaimon",
      level: 3
    },
    {
      name: "ModokiBetamon",
      level: 4
    },
    {
      name: "Saberdramon",
      level: 4
    },
    {
      name: "SnowAgumon",
      level: 3
    },
    {
      name: "Icemon",
      level: 4
    },
    {
      name: "Airdramon",
      level: 4
    },
    {
      name: "MetalTyrannomon",
      level: 5
    },
    {
      name: "Akatorimon",
      level: 4
    },
    {
      name: "Geremon",
      level: 4
    },
    {
      name: "Vermilimon",
      level: 5
    },
    {
      name: "Meteormon",
      level: 5
    },
    {
      name: "Jijimon",
      level: 6
    },
    {
      name: "Babamon",
      level: 6
    },
    {
      name: "FlareRizamon",
      level: 4
    },
    {
      name: "Thunderballmon",
      level: 4
    },
    {
      name: "Muchomon",
      level: 3
    },
    {
      name: "Goldramon",
      level: 6
    },
    {
      name: "Soulmon",
      level: 4
    },
    {
      name: "Rosemon",
      level: 6
    },
    {
      name: "Piddomon",
      level: 4
    },
    {
      name: "Gigadramon",
      level: 5
    },
    {
      name: "Cyberdramon",
      level: 5
    },
    {
      name: "SkullSatamon",
      level: 5
    },
    {
      name: "Milleniummon",
      level: 6
    },
    {
      name: "Daemon",
      level: 6
    },
    {
      name: "KingEtemon",
      level: 6
    },
    {
      name: "Chibomon",
      level: 1
    },
    {
      name: "Pururumon",
      level: 1
    },
    {
      name: "Tsubumon",
      level: 1
    },
    {
      name: "DemiVeemon",
      level: 2
    },
    {
      name: "Poromon",
      level: 2
    },
    {
      name: "Upamon",
      level: 2
    },
    {
      name: "Hawkmon",
      level: 3
    },
    {
      name: "Armadillomon",
      level: 3
    },
    {
      name: "Wormmon",
      level: 3
    },
    {
      name: "Flamedramon",
      level: 7
    },
    {
      name: "Raidramon",
      level: 7
    },
    {
      name: "Magnamon",
      level: 7
    },
    {
      name: "Sethmon",
      level: 7
    },
    {
      name: "Halsemon",
      level: 7
    },
    {
      name: "Shurimon",
      level: 7
    },
    {
      name: "Toucanmon",
      level: 7
    },
    {
      name: "Submarimon",
      level: 7
    },
    {
      name: "Bucchiemon",
      level: 7
    },
    {
      name: "Stegomon",
      level: 7
    },
    {
      name: "Pegasusmon",
      level: 7
    },
    {
      name: "Nefertimon",
      level: 7
    },
    {
      name: "ExVeemon",
      level: 4
    },
    {
      name: "Stingmon",
      level: 4
    },
    {
      name: "Aquillamon",
      level: 4
    },
    {
      name: "Ankylomon",
      level: 4
    },
    {
      name: "Paildramon",
      level: 5
    },
    {
      name: "Dinobeemon",
      level: 5
    },
    {
      name: "Silphymon",
      level: 5
    },
    {
      name: "Shakkoumon",
      level: 5
    },
    {
      name: "Imperialdramon",
      level: 6
    },
    {
      name: "GranKuwagamon",
      level: 6
    },
    {
      name: "Valkyrimon",
      level: 6
    },
    {
      name: "Vikemon",
      level: 6
    },
    {
      name: "Seraphimon",
      level: 6
    },
    {
      name: "Zhuqiaomon",
      level: 6
    },
    {
      name: "Azulongmon",
      level: 6
    },
    {
      name: "Baihumon",
      level: 6
    },
    {
      name: "Mokumon",
      level: 1
    },
    {
      name: "Omnimon",
      level: 6
    },
  ]);
}