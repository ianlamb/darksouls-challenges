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
		'name':'No Shields',
		'difficulty':8,
		'description':'',
		'types':['lhw']
	},
	{
		'name':'No Spells',
		'difficulty':4,
		'description':'',
		'types':['behaviour']
	},
	{
		'name':'No Critical Hits',
		'difficulty':8,
		'description':'',
		'types':['behaviour']
	},
	{
		'name':'Naked',
		'difficulty':8,
		'description':'',
		'types':['armour']
	},
	{
		'name':'Starting Equipment Only',
		'difficulty':4,
		'description':'',
		'types':['armour','lhw','rhw']
	},
	{
		'name':'No Elemental Weapons',
		'difficulty':2,
		'description':'',
		'types':['upgrade']
	},
	{
		'name':'Lightning Weapons',
		'difficulty':2,
		'description':'',
		'types':['upgrade']
	},
	{
		'name':'Fire Weapons',
		'difficulty':2,
		'description':'',
		'types':['upgrade']
	},
	{
		'name':'Chaos Weapons',
		'difficulty':2,
		'description':'',
		'types':['upgrade']
	},
	{
		'name':'Divine Weapons',
		'difficulty':2,
		'description':'',
		'types':['upgrade']
	},
	{
		'name':'Magic Weapons',
		'difficulty':2,
		'description':'',
		'types':['upgrade']
	},
	{
		'name':'Enchanted Weapons',
		'difficulty':2,
		'description':'',
		'types':['upgrade']
	},
	{
		'name':'+10 Weapon',
		'difficulty':4,
		'description':'Only upgrade weapons to +10. No elemental upgrades allowed.',
		'types':['upgrade']
	},
	{
		'name':'+5 Weapon',
		'difficulty':8,
		'description':'Only upgrade weapons to +5. No elemental upgrades allowed.',
		'types':['upgrade']
	},
	{
		'name':'No Weapon Upgrades',
		'difficulty':16,
		'description':'',
		'types':['upgrade']
	},
	{
		'name':'No Armour Upgrades',
		'difficulty':2,
		'description':'',
		'types':['upgrade']
	},
	{
		'name':'No Healing',
		'difficulty':16,
		'description':'You may not use Estus, Heal spells or Humanity. Bonfires are the only method allowed to restore HP.',
		'types':['behaviour']
	},
	{
		'name':'No Consumables',
		'difficulty':2,
		'description':'',
		'types':['item']
	},
	{
		'name':'Use What You See',
		'difficulty':8,
		'description':'',
		'types':['armour','lhw','rhw']
	},
	{
		'name':'No Dodge',
		'difficulty':16,
		'description':'',
		'types':['behaviour']
	},
	{
		'name':'No Master Key',
		'difficulty':2,
		'description':'',
		'types':['item']
	},
	{
		'name':'No Leveling',
		'difficulty':16,
		'description':'',
		'types':['level']
	},
	{
		'name':'Max Level: SL10',
		'difficulty':8,
		'description':'',
		'types':['level']
	},
	{
		'name':'Max Level: SL20',
		'difficulty':4,
		'description':'',
		'types':['level']
	},
	{
		'name':'Max Level: SL30',
		'difficulty':2,
		'description':'',
		'types':['level']
	},
	{
		'name':'Class: Warrior',
		'difficulty':2,
		'description':'Start your character as Warrior.',
		'types':['class']
	},
	{
		'name':'Class: Knight',
		'difficulty':2,
		'description':'Start your character as Knight.',
		'types':['class']
	},
	{
		'name':'Class: Wanderer',
		'difficulty':2,
		'description':'Start your character as Wanderer.',
		'types':['class']
	},
	{
		'name':'Class: Thief',
		'difficulty':2,
		'description':'Start your character as Thief.',
		'types':['class']
	},
	{
		'name':'Class: Bandit',
		'difficulty':2,
		'description':'Start your character as Bandit.',
		'types':['class']
	},
	{
		'name':'Class: Hunter',
		'difficulty':2,
		'description':'Start your character as Hunter.',
		'types':['class']
	},
	{
		'name':'Class: Sorcerer',
		'difficulty':2,
		'description':'Start your character as Sorcerer.',
		'types':['class']
	},
	{
		'name':'Class: Pyromancer',
		'difficulty':2,
		'description':'Start your character as Pyromancer.',
		'types':['class']
	},
	{
		'name':'Class: Cleric',
		'difficulty':2,
		'description':'Start your character as Cleric.',
		'types':['class']
	},
	{
		'name':'Class: Deprived',
		'difficulty':2,
		'description':'Start your character as Deprived.',
		'types':['class']
	},
	{
		'name':'Cosplay: Solaire',
		'difficulty':4,
		'description':'As soon as you can, kill Solaire and adorn his equipment.',
		'types':['armour','lhw','rhw']
	},
	{
		'name':'Cosplay: Ninja',
		'difficulty':4,
		'description':'Start as the Thief class and only wear the thief armour set. As soon as you can, kill the Undead Male shop keeper and use his Uchigatana in both hands.',
		'types':['armour','lhw','rhw']
	},
	{
		'name':'Cosplay: Spartan',
		'difficulty':4,
		'description':'Spears, Straight Swords, Round Shields, Leather and Brass armour are allowed. No chest piece and no elemental weapons.',
		'types':['armour','lhw','rhw']
	},
	{
		'name':'Weapon Type: Straight Swords',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Greatswords',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Ultra Greatswords',
		'difficulty':2,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Curved Swords',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Curved Greatswords',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Thrusting Swords',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Katanas',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Axes',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Greataxes',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Spears',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Halberds',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Hammers',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Great Hammers',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Daggers',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Gauntlets',
		'difficulty':8,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Whips',
		'difficulty':8,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Bows',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Crossbows',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Catalysts',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Talismans',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	},
	{
		'name':'Weapon Type: Pyromancy Flame',
		'difficulty':4,
		'description':'You may use only this type of weapon in your right hand.',
		'types':['rhw']
	}
];