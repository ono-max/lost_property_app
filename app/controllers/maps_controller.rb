class MapsController < ApplicationController
  def index
    @items = Item.all
    gon.items = @items
  end
  
  def new
    @@latitude = params[:latitude]
    @@longitude = params[:longitude]
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    respond_to do |format|
      if @item.save
        format.html { redirect_to root_path }
      else
        format.html { render :new }
      end
    end
  end

  private
  def item_params
    params.require(:item).permit(:image).merge(latitude: @@latitude).merge(longitude: @@longitude)
  end
end
