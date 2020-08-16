class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable,
          authentication_keys: [ :login ]

  attr_writer :login
  before_create :set_rol
  mount_uploader :avatar, AvatarUploader

  has_many :entries

  def login
    @login || self.dni || self.email
  end

  enum rol: [
      :admin,
      :comercial
  ]

  private
  # Seteamos el rol con el callback before create para cada vez que se cree el usuario usando una variable indexada enum.
  def set_rol
    self.rol = :comercial
  end

  # Saltamos la verificacion del warden en cada inicio de sesion solo para validar y unificar mayusculas y minusculas
  def self.find_for_database_authentication warden_condition
    conditions = warden_condition.dup
    login = conditions.delete(:login)
    where(conditions).where(
        ["lower(dni) = :value OR lower(email) = :value",
         { value: login.strip.downcase}]).first
  end

end
