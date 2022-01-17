package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

	public static WebDriver driver;

	public LoginPage(WebDriver rdriver) {

		driver =rdriver;
		PageFactory.initElements(rdriver,this);

	}

	@FindBy(id="Email")
	WebElement txtuser;

	@FindBy(id="Password")
	WebElement txtpass;

	@FindBy(xpath ="//button[@type='submit']")
	WebElement btnLogin;
	
	@FindBy(linkText = "Logout")
	WebElement btnLogot;

	public void SetUsername(String user) {

		txtuser.clear();
		txtuser.sendKeys(user);


	}

	public void SetPasswors(String pass) {

		txtpass.clear();
		txtpass.sendKeys(pass);


	}

	public void ClickLogin() {

		btnLogin.click();
		
	
	}

	public void ClickLogout() {

		btnLogot.click();
		
	
	}













}
