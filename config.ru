# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

run Rails.application
Rails.application.load_server

# if ActiveRecord::Base.connection.migration_context.needs_migration?
#   raise 'Migrations are pending. Run `rake db:migrate` to resolve the issue.'
# end

use Rack::Cors do
  allow do
    # origins '*' allows requests from ALL frontend origins
    # (if you deploy your application, change this to
    # ONLY allow requests from YOUR frontend origin, like:
    # origins 'my-react-app.netlify.app')
    origins '*'
    resource '*', headers: :any, methods: [:get, :post, :delete, :put, :patch, :options, :head]
  end
end 


# use Rack::JSONBodyParser
# run ApplicationController
