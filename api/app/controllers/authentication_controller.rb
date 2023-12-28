class AuthenticationController < ApplicationController
    skip_before_action :verify_authenticity_token
  
    def login
      user = User.find_by(email: params[:email])
  
      if user && user.authenticate(params[:password])
        # 認証に成功した場合の処理（例：トークンの発行）
        token = generate_token(user)
        render json: { token: token }, status: :ok
      else
        # 認証に失敗した場合の処理
        render json: { error: 'Invalid credentials' }, status: :unauthorized
      end
    end
  
    private
  
    def generate_token(user)
      # JWTトークンを生成するロジック（JWT gemを使用する場合）
      # JWT.encode(payload, secret, 'HS256')
    end
  end
  
