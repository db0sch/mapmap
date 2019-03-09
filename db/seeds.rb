
Place.destroy_all
places = [
  { name: 'Cafe Shakespear and Company', address: '37 Rue de la Bûcherie, 75005 Paris, France', tag: 'coffeeshop' },
  { name: 'Fragment', address: '76 Rue des Tournelles, 75003 Paris, France', tag: 'coffeeshop' },
  { name: 'The Barn Roastery', address: 'Schönhauser Allee 8, 10119 Berlin', tag: 'coffeeshop' },
  { name: 'Bonanza Heroes', address: 'Oderberger Str. 35, 10435 Berlin', tag: 'coffeeshop' },
  { name: 'Umami', address: 'Knaackstraße 16, 10405 Berlin', tag: 'restaurant' },
  { name: 'Annelies', address: 'Görlitzer Str. 68, 10997 Berlin', tag: 'restaurant' },
  { name: 'Dersou', address: '21 Rue Saint-Nicolas, 75012 Paris, France', tag: 'restaurant' },
  { name: 'Saturne', address: '17 Rue Notre Dame des Victoires, 75002 Paris, France', tag: 'restaurant' }
]

places.each do |place|
  sleep 1
  pl = Place.new(place.slice(:name, :address))
  pl.tag_list.add(place[:tag])
  pl.save
end

