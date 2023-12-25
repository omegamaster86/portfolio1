class RegistersController < ApplicationController

  def index
    @register = Register.all
    render json: @register
  end

  def create
    @register = Register.new(registers_params)
    if @register.save
      render json: @register, status: :created, location: @register
    else
      render json: { errors: @register.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def registers_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
  
end
