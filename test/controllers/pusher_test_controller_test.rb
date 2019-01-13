require 'test_helper'

class PusherTestControllerTest < ActionDispatch::IntegrationTest
  test "should get test" do
    get pusher_test_test_url
    assert_response :success
  end

end
