class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        users = User.all 
        render json: users, status: :ok 
    end

    def show
        user = find_user
        render json: user, status: :ok
    end

    def create 
        user = User.new(user_params)
        if user.save 
            render json: user, status: :created
        else 
            render json: { error: "invalid data"}, status: 400
        end
    end

    def login
        user = User.find_by(username: user_params[:username])
        if(user && user.authenticate(user_params[:password_digest]))
            render json: user 
        else
            render json: { error: "incorrect username/password combination"}
        end
    end

    # def update
    #     user = find_user
    #     user.update(user_params)
    #     render json: user, status: :created 
    # end

    # def destroy
    #     user = find_user
    #     user.destroy
    #     head :no_content
    # end

    private

    def user_params
        params.permit(:name, :username, :email, :password_digest)
    end

    def find_user
        User.find(params[:id])
    end

    def render_not_found_response
        render json: { error: user.errors.full_messages }, status: :not_found 
    end

end

