class PostsController < ApplicationController
  before_action :authorize_request, only: [ :create, :update, :destroy, :index_user ]
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.order(created_at: :desc)

    render json: @posts, include: [:comments, :user], status: :ok
  end

  # GET /user/1/post/1
  def index_user
    @posts = Post.where(user_id: @current_user.id)
    render json: @posts, include: :comments, status: :ok
  end

  # GET /posts/1
  def show
    render json: @post, include: [:comments, :user], status: :ok
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user

    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:content, :img_url)
    end
end
