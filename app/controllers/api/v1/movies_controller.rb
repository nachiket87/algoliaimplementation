module Api
  module V1
    class MoviesController < ApplicationController
      protect_from_forgery with: :null_session
      def index
        @movies = Movie.search(params[:title])
        render json: MovieSerializer.new(@movies, options).serializable_hash.to_json
      end

      def show
        @movie = Movie.find(params[:id])
        render json: MovieSerializer.new(@movie, options).serializable_hash.to_json
      end

      def create
        movie = Movie.new(movie_params)

        if movie.save
          render json: MovieSerializer.new(movie, options).serializable_hash.to_json
        else
          render json: { error: movie.errors.message }, status: 422
        end
      end

      def destroy
        movie = Movie.find(params[:id])
        if movie.destroy
          head :no_content
        else
          render json: { error: movie.errors.message }, status: 422
        end
      end

      private

      def options
        @options ||= { include: %i[actors genres alternate_names] }
      end

      def movie_params
        params.require(:movie).permit(:title, :year, :rating, :score)
      end

    end
  end
end
