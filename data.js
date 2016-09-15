var difficulties = 
	{
		8:'Casual',
		16:'Experienced',
		24:'Veteran',
		32:'Master',
		40:'Masochist'
	}

var modifiers = [
	{
		'id':'no-shields',
		'name':'No Shields',
		'difficulty':8,
		'description':'Who blocks anyway? Rolls for days!',
		'types':['lhw']
	},
	{
		'id':'no-spells',
		'name':'No Spells',
		'difficulty':4,
		'description':'Shush.',
		'types':['behaviour']
	},
	{
		'id':'no-crits',
		'name':'No Critical Hits',
		'difficulty':8,
		'description':'You may not backstap, parry-reposte or drop-attack an enemy. Fight them like a man!',
		'types':['behaviour']
	},
	{
		'id':'naked',
		'name':'Naked',
		'difficulty':8,
		'description':'Drop your gear soldier, you\'re going in your underwear!',
		'types':['armour', 'naked']
	},
	{
		'id':'starting-equipment',
		'name':'Starting Equipment Only',
		'difficulty':4,
		'description':'',
		'types':['cosplay','armour','lhw','rhw']
	},
	{
		'id':'no-elemental',
		'name':'No Elemental Weapons',
		'difficulty':2,
		'description':'Your upgrade path must remain physical.',
		'types':['upgrade','no-elemental']
	},
	{
		'id':'weapon-up-lightning',
		'name':'Lightning Weapons',
		'difficulty':2,
		'description':'Your upgrade path after +5 must be lightning.',
		'types':['upgrade']
	},
	{
		'id':'weapon-up-fire',
		'name':'Fire Weapons',
		'difficulty':2,
		'description':'Your upgrade path after +5 must be fire.',
		'types':['upgrade']
	},
	{
		'id':'weapon-up-chaos',
		'name':'Chaos Weapons',
		'difficulty':2,
		'description':'Your upgrade path after +5 must be chaos.',
		'types':['upgrade']
	},
	{
		'id':'weapon-up-divine',
		'name':'Divine Weapons',
		'difficulty':2,
		'description':'Your upgrade path after +5 must be divine.',
		'types':['upgrade']
	},
	{
		'id':'weapon-up-magic',
		'name':'Magic Weapons',
		'difficulty':2,
		'description':'Your upgrade path after +5 must be magic.',
		'types':['upgrade']
	},
	{
		'id':'weapon-up-enchanted',
		'name':'Enchanted Weapons',
		'difficulty':2,
		'description':'Your upgrade path after +5 must be enchanted.',
		'types':['upgrade']
	},
	{
		'id':'weapon-up-10',
		'name':'+10 Weapon',
		'difficulty':4,
		'description':'Only upgrade weapons to +10. No elemental upgrades allowed.',
		'types':['upgrade']
	},
	{
		'id':'weapon-up-5',
		'name':'+5 Weapon',
		'difficulty':8,
		'description':'Only upgrade weapons to +5. No elemental upgrades allowed.',
		'types':['upgrade']
	},
	{
		'id':'no-weapon-upgrades',
		'name':'No Weapon Upgrades',
		'difficulty':16,
		'description':'',
		'types':['upgrade']
	},
	{
		'id':'no-armor-upgrades',
		'name':'No Armor Upgrades',
		'difficulty':2,
		'description':'',
		'types':['upgrade', 'naked']
	},
	{
		'id':'no-healing',
		'name':'No Healing',
		'difficulty':16,
		'description':'You may not use Estus, Heal spells or Humanity. Bonfires are the only method allowed to restore HP.',
		'types':['behaviour']
	},
	{
		'id':'no-consumables',
		'name':'No Consumables',
		'difficulty':2,
		'description':'You may not use any consumable items except for Estus Flask.',
		'types':['item']
	},
	{
		'id':'use-what-you-see',
		'name':'Use What You See',
		'difficulty':8,
		'description':'Any time you see an item within reach you must pick it up and use/equip it.',
		'types':['cosplay','armour','lhw','rhw']
	},
	{
		'id':'no-dodge',
		'name':'No Dodge',
		'difficulty':16,
		'description':'',
		'types':['behaviour']
	},
	{
		'id':'no-master-key',
		'name':'No Master Key',
		'difficulty':2,
		'description':'',
		'types':['item']
	},
	{
		'id':'no-leveling',
		'name':'No Leveling',
		'difficulty':16,
		'description':'',
		'types':['level']
	},
	{
		'id':'max-level-10',
		'name':'Max Level: SL10',
		'difficulty':8,
		'description':'',
		'types':['level']
	},
	{
		'id':'max-level-20',
		'name':'Max Level: SL20',
		'difficulty':4,
		'description':'',
		'types':['level']
	},
	{
		'id':'max-level-30',
		'name':'Max Level: SL30',
		'difficulty':2,
		'description':'',
		'types':['level']
	},
	{
		'id':'warrior',
		'name':'Class: Warrior',
		'difficulty':2,
		'description':'Start your character as Warrior.',
		'types':['class']
	},
	{
		'id':'knight',
		'name':'Class: Knight',
		'difficulty':2,
		'description':'Start your character as Knight.',
		'types':['class']
	},
	{
		'id':'wanderer',
		'name':'Class: Wanderer',
		'difficulty':2,
		'description':'Start your character as Wanderer.',
		'types':['class']
	},
	{
		'id':'thief',
		'name':'Class: Thief',
		'difficulty':2,
		'description':'Start your character as Thief.',
		'types':['class']
	},
	{
		'id':'bandit',
		'name':'Class: Bandit',
		'difficulty':2,
		'description':'Start your character as Bandit.',
		'types':['class']
	},
	{
		'id':'hunter',
		'name':'Class: Hunter',
		'difficulty':2,
		'description':'Start your character as Hunter.',
		'types':['class']
	},
	{
		'id':'sorcerer',
		'name':'Class: Sorcerer',
		'difficulty':2,
		'description':'Start your character as Sorcerer.',
		'types':['class']
	},
	{
		'id':'pyromancer',
		'name':'Class: Pyromancer',
		'difficulty':2,
		'description':'Start your character as Pyromancer.',
		'types':['class']
	},
	{
		'id':'cleric',
		'name':'Class: Cleric',
		'difficulty':2,
		'description':'Start your character as Cleric.',
		'types':['class']
	},
	{
		'id':'deprived',
		'name':'Class: Deprived',
		'difficulty':2,
		'description':'Start your character as Deprived.',
		'types':['class']
	},
	{
		'id':'solaire',
		'name':'Cosplay: Solaire',
		'difficulty':4,
		'description':'As soon as you can, kill Solaire and adorn his equipment.',
		'types':['cosplay','solaire','armour','lhw','rhw']
	},
	{
		'id':'ninja',
		'name':'Cosplay: Ninja',
		'difficulty':4,
		'description':'Start as the Thief class and only wear the thief armour set. As soon as you can, kill the Undead Male shop keeper and use his Uchigatana in both hands.',
		'types':['cosplay','nina','armour','lhw','rhw','class']
	},
	{
		'id':'spartan',
		'name':'Cosplay: Spartan',
		'difficulty':4,
		'description':'Spears, Straight Swords, Round Shields, Leather and Brass armour are allowed. No chest piece and no elemental weapons.',
		'types':['cosplay','spartan','no-elemental','armour','lhw','rhw']
	},
	{
		'id':'straight-swords',
		'name':'Weapon Type: Straight Swords',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'greatswords',
		'name':'Weapon Type: Greatswords',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'ultra-greatswords',
		'name':'Weapon Type: Ultra Greatswords',
		'difficulty':2,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'curved-swords',
		'name':'Weapon Type: Curved Swords',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'curved-greatswords',
		'name':'Weapon Type: Curved Greatswords',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'thrusting-swords',
		'name':'Weapon Type: Thrusting Swords',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'katanas',
		'name':'Weapon Type: Katanas',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'axes',
		'name':'Weapon Type: Axes',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'greataxes',
		'name':'Weapon Type: Greataxes',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'spears',
		'name':'Weapon Type: Spears',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'halberds',
		'name':'Weapon Type: Halberds',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'hammers',
		'name':'Weapon Type: Hammers',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'great-hammers',
		'name':'Weapon Type: Great Hammers',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'daggers',
		'name':'Weapon Type: Daggers',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'gauntlets',
		'name':'Weapon Type: Gauntlets',
		'difficulty':8,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'whips',
		'name':'Weapon Type: Whips',
		'difficulty':8,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'bows',
		'name':'Weapon Type: Bows',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'crossbows',
		'name':'Weapon Type: Crossbows',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'catalysts',
		'name':'Weapon Type: Catalysts',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'talismans',
		'name':'Weapon Type: Talismans',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'id':'pyro-flame',
		'name':'Weapon Type: Pyromancy Flame',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	}
];