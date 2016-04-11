class RecordsController < ApplicationController
  def index
    @records = Record.all
  end

  def destroy
    @record = Record.find(params[:id])
    # @record.destroy
    head :no_content
  end
end
