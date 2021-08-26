class PedalsController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        pedals = Pedal.all 
        render json: pedals, status: :ok 
    end

    def show
        pedal = find_pedal
        render json: pedal, status: :ok
    end

    def create 
        pedal = Pedal.create(pedal_params)
        render json: pedal, status: :created
    end

    # def update
    #     pedal = find_pedal
    #     pedal.update(pedal_params)
    #     render json: pedal, status: :created 
    # end

    # def destroy
    #     pedal = find_pedal
    #     pedal.destroy
    #     head :no_content
    # end

    private

    def pedal_params
        params.permit(:name, :effect_type, :price, :stereo, :number_of_inputs, :number_of_outputs, :image, :category)
    end

    def find_pedal
        Pedal.find(params[:id])
    end

    def render_not_found_response
        render json: { error: pedal.errors.full_messages }, status: :not_found 
    end
    
end
