require 'test_helper'

class RegistersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @register = registers(:one)
  end

  test "should get index" do
    get registers_url, as: :json
    assert_response :success
  end

  test "should create register" do
    assert_difference('Register.count') do
      post registers_url, params: { register: { confirmpassword: @register.confirmpassword, email: @register.email, name: @register.name, password_digest: @register.password_digest } }, as: :json
    end

    assert_response 201
  end

  test "should show register" do
    get register_url(@register), as: :json
    assert_response :success
  end

  test "should update register" do
    patch register_url(@register), params: { register: { confirmpassword: @register.confirmpassword, email: @register.email, name: @register.name, password_digest: @register.password_digest } }, as: :json
    assert_response 200
  end

  test "should destroy register" do
    assert_difference('Register.count', -1) do
      delete register_url(@register), as: :json
    end

    assert_response 204
  end
end
