module Api
  module V1
    class MoviesController < ApplicationController
      def index
        @movies = Movie.first(1)
        render json: MovieSerializer.new(@movies, options).serializable_hash.to_json
      end

      def show
        @movie = Movie.find(params[:id])
        render json: MovieSerializer.new(@movie, options).serializable_hash.to_json
      end

      private

      def options
        @options ||= { include: %i[actors genres] }
      end

    end
  end
end
