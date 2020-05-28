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
        "image" : "gear/uniform/infantry_combat.png"
    },
    {
        "name" : "Infantry",
        "type" : "Patrol",
        "image" : "gear/uniform/infantry_patrol.png"
    }, 
    {
        "name" : "Special",
        "type" : "Ghillie",
        "image" : "gear/uniform/special_ghillie.png"
    },
    {
        "name" : "Special",
        "type" : "Pilot",
        "image" : "gear/uniform/special_pilot.png"
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
        "image" : "gear/weapon/l131a1.png"
    },
    {
        "designation" : "L7A2",
        "name" : "FN MAG",
        "type" : "General-Purpose Machine Gun",
        "image" : "gear/weapon/l7a2.png"
    },
    {
        "designation" : "L129A1",
        "name" : "LM308MWS",
        "type" : "Semi-Automatic Rifle",
        "image" : "gear/weapon/l129a1.png"
    },
    {
        "designation" : "L115A3",
        "name" : "AWM",
        "type" : "Bolt-Action Sniper Rifle",
        "image" : "gear/weapon/l115a3.png"
    },
    {
        "designation" : "L128A1",
        "name" : "Benelli M4",
        "type" : "Semi-Automatic Shotgun",
        "image" : "gear/weapon/l128a1.png"
    },
    {
        "designation" : "L2A1",
        "name" : "ILAW",
        "type" : "Unguided Anti-Armour Rocket Launcher",
        "image" : "gear/weapon/l2a1.png"
    },
    {
        "name" : "Javelin",
        "type" : "Anti-Tank Guided Weapon",
        "image" : "gear/weapon/javelin.png"
    }
];
