class CommentsController < ApplicationController
  before_action :authorize_request, only: [ :create, :destroy ]
  before_action :set_comment, only: [:destroy]

  # # GET /comments
  # def index
  #   @post = Post.find(params[:post_id])
  #   @comments = Comment.where(post_id: @post.id)
  #   render json: @comments, include: [:post, :user], status: :ok
  # end

  # POST /comments
  def create
    @post = Post.find(params[:post_id])
    @comment = Comment.new(comment_params)
    @comment.post = @post
    @comment.user = @current_user
    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:content)
    end
end
