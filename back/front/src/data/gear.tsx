export interface gear {
    designation?: string,
    name: string,
    type: string,
    image: string,
    description?: string
};

export const GearUniforms : gear[] = [
    {
        "name" : "Infantry",
        "type" : "Combat",
        "image" : "gear/uniform/infantry_combat.png",
        "description" : "Standard issue combat outfit. Colors adapted to current terrain."
    },
    {
        "name" : "Infantry",
        "type" : "Patrol",
        "image" : "gear/uniform/infantry_patrol.png",
        "description" : "Outfit worn by soldiers thats used on patrol. Colors adapted to current terrain."
    }, 
    {
        "name" : "Special",
        "type" : "Ghillie",
        "image" : "gear/uniform/special_ghillie.png",
        "description" : "Camouflaged outfit worn by snipers so that they can't be easily detected."
    },
    {
        "name" : "Special",
        "type" : "Pilot",
        "image" : "gear/uniform/special_pilot.png",
        "description" : "This outfit is worn exclusively by pilots. Colors adapted to current terrain."
    }
];

export const GearVehicles : gear[] = [
    {
        "name" : "Foxhound",
        "type" : "Light Protected Patrol Vehicle",
        "image" : "gear/vehicle/foxhound.png"
    },
    {
        "name" : "Husky",
        "type" : "Light Protected Patrol Vehicle",
        "image" : "gear/vehicle/husky.png"
    },
    {
        "name" : "Coyote",
        "type" : "Tactical Support Vehicle",
        "image" : "gear/vehicle/coyote.png"
    },
    {
        "name" : "Jackal",
        "type" : "Tactical Support Vehicle",
        "image" : "gear/vehicle/jackal.png"
    },
    {
        "name" : "Panther",
        "type" : "Protected Patrol Vehicle",
        "image" : "gear/vehicle/panther.png"
    },
    {
        "name" : "Land Rover WMIK",
        "type" : "Light Utility Vehicle",
        "image" : "gear/vehicle/landrover.png"
    }
]

export const GearWeapons : gear[] = [
    {
        "designation" : "L85A2",
        "name" : "SA-80 L85A2",
        "type" : "Assault Rifle",
        "image" : "gear/weapon/l85a2.png",
        "description" : "The L85 is a rifle that belongs to the SA-80 family. This is the standard individual weapon that's used by all of our infantry units excluding certain roles such as marksmen and snipers. It is an excellent weapon that provides realiability, accuracy and versatility all in one package."
    },
    {
        "designation" : "L22A2",
        "name" : "SA-80 L22A2",
        "type" : "Carbine Rifle",
        "image" : "gear/weapon/l22a2.png",
        "description" : "SA-80 but in carbine form. It is designed to fit in very small spaces which makes it adequate for various types of crewmen and pilots. It's overall length is 565mm. However, due to its shorter barrel it offers less accuracy. "
    },
    {
        "designation" : "L131A1",
        "name" : "Glock 17",
        "type" : "Semi-Automatic Handgun",
        "image" : "gear/weapon/l131a1.png",
        "description" : "Chambered in 9x19 Parabellum with a standard double-stacked magazine capacity of 17 rounds. This modular lightweight pistol is classed as the General Service Pistol. It is carried as a secondary weapon by British frontline troops."
    },
    {
        "designation" : "L7A2",
        "name" : "FN MAG",
        "type" : "General-Purpose MG",
        "image" : "gear/weapon/l7a2.png",
        "description" : "Short for \"Mitrailleuse d'Appui Général\", meaning \"general support machine gun\". Chambered in 7.62x51mm NATO, with a mobile box capacity of 50 to 200 rounds, and firing rate up to 1000 rounds per minute.This belt-fed machine gun is classed as the General Purpose Machine Gun - primarily carried by British autoriflemen to provide both direct and suppressive fire. The weight of the L7A2, accompanied by carried ammunition, makes the handling of the machine gun a semi-distributed duty in an infantry squad."
    },
    {
        "designation" : "L129A1",
        "name" : "LM308MWS",
        "type" : "Semi-Automatic Rifle",
        "image" : "gear/weapon/l129a1.png",
        "description" : "Designed by LMT. Based on the SR-25 and the AR-10. Chambered in 7.62x51mm NATO, with a standard magazine capacity of 20 rounds, and primarily fitted with a 6x optic: the Trijicon ACOG TA648-RMR-UKS. This american rifle is carried by British marksmen designed to give infantry squads the ability to engage mid-long range targets - firing accurately up to 800 meters. The weight of the L129A1, in comparison to other return-fire effective weapons, makes the rifle suitable as a patrolling soldier's weapon."
    },
    {
        "designation" : "L115A3",
        "name" : "AWM",
        "type" : "Bolt-Action Sniper Rifle",
        "image" : "gear/weapon/l115a3.png",
        "description" : "Short for \"Arctic Warfare Magnum\". Chambered in .338 Lapua Magnum, with a standard capacity of 5 rounds, and primarily fitted with a 5-25x optic, the Schmidt & Bender 5-25x56 PM, at day and accompanied by a thermal imaging optic at night, the Sniper Thermal Imaging Capability optic. This high-precision bolt-action sniper rifle is carried by British snipers designed to engage long-range targets from positions of concealment or at distances exceeding the target's peripheral vision. The L115A3 is capable of firing effectively up to 1500 meters. The weight and stationary nature of the L115A3 makes the handling of the sniper rifle a two-individual distributed duty. "
    },
    {
        "designation" : "L128A1",
        "name" : "Benelli M4",
        "type" : "Semi-Automatic Shotgun",
        "image" : "gear/weapon/l128a1.png",
        "description" : "Chambered in 12 gauge, with a standard tube-magazine capacity of 7 shells, and primarily fitted with a Eotech 552 holographic sight. This semi-automatic combat shotgun is generally carried by the British pointman. The L128A1 is particulary useful when engaged in close quarter battle - including urban environments and dense vegetation - with an effective firing range of 50 meters."
    },
    {
        "designation" : "L2A1 ILAW",
        "name" : "AT4",
        "type" : "Unguided AT Weapon",
        "image" : "gear/weapon/l2a1.png",
        "description" : "Adopted and designated as the L2A1 ILAW. Compatible with HEAT, HEDP 502, HP, AST, ER, and HE projectiles. This single-use multi-purpose unguided anti-tank rocket launcher is carried by British light anti-tank specialists designed to primarily engage, immobilize, and eliminate both armoured and non-armoured vehicle targets, firing effectively up to 300 meters - 600 meters via Extended Range projectiles. The L2A1 ILAW is effective against bunkers, fox holes, buildings, and urban environments - often used to create entry holes through walls. The L2A1 ILAW is also effective at engaging multiple ground targets at once via HE and HEDP 502 projectiles."
    },
    {
        "designation" : "Javelin",
        "name" : "FGM-148 Javelin",
        "type" : "Guided AT Weapon",
        "image" : "gear/weapon/javelin.png",
        "description" : "Compatible with HEAT warhead missiles. This american man-portable anti-tank missile launcher is carried by British heavy anti-tank specialists designed to primarily eliminate both armoured and non-armoured vehicle targets. The Javelin utilizes a 'fire-and-forget' system, relying entirely on the fired missile's automatic infrared guidance to eliminate the pre-launch locked-on target - firing effectively up to 2500 meters. The Javelin provides two modes: a top-attack flight profile against armoured vehicles, and a direct-attack mode for use against buildings and targets under obstruction. The Javelin's direct-attack mode also has the ability to engage helicopters within the detection-range. The weight and stationary nature of the Javelin makes the handling of the launcher a two-individual distributed duty."
    }
];
