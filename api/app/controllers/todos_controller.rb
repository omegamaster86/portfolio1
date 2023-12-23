class TodosController < ApplicationController
    def index
        @todos = Todo.all.order(created_at: :desc).limit(3)
        render json: @todos
        # descは降順を指定している
    end
    # GET /todos/:id
    def show
        @todo = Todo.find(params[:id])
        render json: @todo
    end
end
