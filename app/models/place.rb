class Place < ApplicationRecord
  geocoded_by :address do |obj,results|
    if geo = results.first
      obj.location_list.add(geo.city)
      obj.latitude = geo.latitude
      obj.longitude = geo.longitude
    end
  end
  after_validation :geocode, if: :will_save_change_to_address?

  acts_as_taggable_on :tags, :locations

  def coordinates
    { lng: longitude, lat: latitude }
  end
end
