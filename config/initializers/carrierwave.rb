unless Rails.env.development? || Rails.env.test?
  CarrierWave.configure do |config|
    config.fog_credentials = {
      provider: 'AWS',
      aws_access_key_id: '<%= Rails.credentials.aws[:access_key_id] %>',
      aws_secret_access_key: '<%= Rails.credentials.aws[:secret_access_key] %>',
      region: 'ap-northeast-1'
    }

    config.fog_directory = 'lost-property-app'
    config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/lost-property-app'
    config.fog_provider = 'fog/aws'
    config.cache_storage = :fog
  end
end