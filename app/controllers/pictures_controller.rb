class PicturesController < ApplicationController
  before_action :authorize_request, only: [ :create, :destroy ]
  before_action :set_picture, only: [:destroy]

  # GET /pictures
  # def index
  #   @post = Post.find(params[:post_id])
  #   @pictures = Picture.where(post_id: post.id)
  #   render json: @pictures, include: :post, :user, status: :ok
  # end

  # POST /pictures
  def create
    @post = Post.find(params[:post_id])
    @picture = Picture.new(picture_params)
    @picture.post = @post

    if @picture.save
      render json: @picture, status: :created
    else
      render json: @picture.errors, status: :unprocessable_entity
    end
  end

  # # DELETE /pictures/1
  # def destroy
  #   @picture.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_picture
      @picture = Picture.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def picture_params
      params.require(:picture).permit(:img_url)
    end
end
