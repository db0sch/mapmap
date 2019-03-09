class Place < ApplicationRecord
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?

  acts_as_taggable_on :tags, :locations

  def coordinates
    { lng: longitude, lat: latitude }
  end
end
