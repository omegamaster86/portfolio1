class RegistersController < ApplicationController

  def index
    @registers = Register.all
    render json: @registers
  end

  def create
    @registers = Register.new(registers_params)
    if @registers.save
      render json: @registers, status: :created, location: @registers
    else
      render json: @registers.errors, status: :unprocessable_entity
    end
  end

  private

  def registers_params
    params.require(:user).permit(:username, :email, :password, :confirmpassword)
  end
end
