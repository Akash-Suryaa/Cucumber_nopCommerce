package StepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import PageObjects.CustomerPage;
import PageObjects.LoginPage;
import io.cucumber.java.en.*;

public class LoginSteps extends BaseClass {
	
	

	@Given("Open the browser")
	public void open_the_browser() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Akash\\eclipse-workspace\\Cucumber_nopCommerce\\Drivers\\chromedriver.exe");
		driver= new ChromeDriver();
		login = new LoginPage(driver);
	   
	}

	@When("User opens URL {string}")
	public void user_opens_URL(String url) {
	    
		driver.get(url);
		driver.manage().window().maximize();
	}

	@And("User enter email as {string} and password as {string}")
	public void user_enter_email_as_and_password_as(String email, String password) {
	    
		login.SetUsername(email);
		login.SetPasswors(password);
		
	}

	@And("click on Login button")
	public void click_on_Login_button() {
	    
		login.ClickLogin();
	}

	@Then("Page title should be {string}")
	public void page_title_should_be(String title) {
	    
		if(driver.getPageSource().contains("Login was unsuccessful")) {
			driver.close();
			Assert.assertTrue(false);
		}else {
			Assert.assertEquals(title, driver.getTitle());
		}
		
		
	}

	@When("User click on Logout button")
	public void user_click_on_Logout_button() throws Exception {
	    
		login.ClickLogout();
		Thread.sleep(3000);
		
	}

	@Then("close browser")
	public void close_browser() {
	   
		driver.close();
	}
	
	//Customer Features StepDefinition
	
	@Then("User can view dashboard")
	public void user_can_view_dashboard() {
	    customer = new CustomerPage(driver);
	    Assert.assertEquals("Dashboard / nopCommerce administration", customer.getPageTitle());
	}

	@When("User clicks on customer menu")
	public void user_clicks_on_customer_menu() throws Exception {
		Thread.sleep(3000);
	    customer.ClickOnCustomer();
	}

	@When("User clicks on customer menuItem")
	public void user_clicks_on_customer_menuItem() throws Exception {
		Thread.sleep(3000);
	    customer.ClickOnCustomerMenuItem();
	}

	@When("User clicks on AddNewBtn")
	public void user_clicks_on_AddNewBtn() throws InterruptedException {
	    customer.ClickOnAddNewBtn();
	    Thread.sleep(2000);
	}

	@Then("User can view add new Customer Page")
	public void user_can_view_add_new_Customer_Page() {
	    
		Assert.assertEquals("Add a new customer / nopCommerce administration", customer.getPageTitle());
		
	}

	@When("User enter customer info")
	public void user_enter_customer_info() {
	    
		customer.EnterTextInEmail("Akashsury@112.gmail.com");
		customer.EnterTextInPass("123345");
		customer.EnterTextInFName("Akash");
		customer.EnterTextInEmailLName("Suryawanshi");
		customer.SelectGender("Male");
		customer.SetCompanyName("HCL");
		
	}

	@When("user clicks on save button")
	public void user_clicks_on_save_button() throws Exception {
	    
		customer.ClickOnSaveBtn();
		Thread.sleep(2000);
	}

	@Then("user can view confirmation message {string}")
	public void user_can_view_confirmation_message(String string) {
	    Assert.assertTrue(driver.findElement(By.tagName("body")).getText().contains("The new customer has been added successfully."));
		
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
