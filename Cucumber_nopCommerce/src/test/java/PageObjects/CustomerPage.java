package PageObjects;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class CustomerPage {

     public static  WebDriver driver ;
     
	public CustomerPage(WebDriver rdriver) {

		
		driver =rdriver;
		PageFactory.initElements(rdriver,this);

	}
	
	By link_Customers = By.xpath("/html/body/div[3]/aside/div/div[4]/div/div/nav/ul/li[4]/a/p");
	By link_CustomerItem = By.xpath("/html/body/div[3]/aside/div/div[4]/div/div/nav/ul/li[4]/ul/li[1]/a/p");
	By link_AddNewBtn = By.xpath("//a[@class='btn btn-primary']");
	By txt_Email = By.id("Email");
	By txt_Pass = By.id("Password");
	By txt_FName = By.id("FirstName");
	By txt_LName =By.id("LastName");
	By rd_maleGender = By.id("Gender_Male");
	By rd_femaleGender = By.id("Gender_Female");
	By datehOfBirth = By.id("DateOfBirth");
	By Company_Name = By.id("Company");
	By Is_Tax_Exempt =By.id("IsTaxExempt");
	By New_sletters = By.className("k-multiselect-wrap k-floatwrap");
	By Cust_Roles_Administrators = By.xpath("//li[contains(text(),'Administrators')]");
	By Cust_Roles_Forum_Moderator = By.xpath("//li[contains(text(),'Forum Moderators')]");
	By Cust_Roles_Guest = By.xpath("//li[contains(text(),'Guests')]");
	By Cust_Roles_Registered = By.xpath("//li[contains(text(),'Registered')]");
	By Cust_Roles_vendor = By.xpath("Vendors");
	By dr_mgr_OfVendor = By.id("VendorId");
	By save_btn = By.name("save");
	
	
	public String getPageTitle() {
		
	   return  driver.getTitle();
		
	}
	
	public void ClickOnCustomer() {
		driver.findElement(link_Customers).click();
		
	}
	
	
	
	public void ClickOnCustomerMenuItem() {
		driver.findElement(link_CustomerItem).click();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	
	public void ClickOnAddNewBtn() {
		driver.findElement(link_AddNewBtn).click();
		
	}
	
	public void EnterTextInEmail(String email) {
		driver.findElement(txt_Email).sendKeys(email);
		
	}
	
	public void EnterTextInPass(String pass) {
		driver.findElement(txt_Pass).sendKeys(pass);
		
	}
	
	public void SetCustomerRole(String role) {
		
		if(role.equals("Administrators")) {
			driver.findElement(Cust_Roles_Administrators).click();
		}
		else if(role.equals("Forum Moderators")) {
			driver.findElement(Cust_Roles_Forum_Moderator).click();
			
		}
		else if(role.equals("Guests")) {
			driver.findElement(Cust_Roles_Guest).click();
		}
		else if(role.equals("Registered")) {
			driver.findElement(Cust_Roles_Registered).click();
		}
		
		
	}
	
	public void SelectManagerOfVender(String value) {

		Select sel = new Select(driver.findElement(dr_mgr_OfVendor));
		sel.selectByValue(value);
		
		
	}
	public void SelectGender(String gender) {
		
		if(gender.equals("Male")) {
			driver.findElement(rd_maleGender).click();
			
		}else if(gender.equals("Female")) {
			driver.findElement(rd_femaleGender).click();
		}
		
		
	}
	
	public void EnterTextInFName(String fname) {
		driver.findElement(txt_FName).sendKeys(fname);
		
	}
	public void EnterTextInEmailLName(String lname) {
		driver.findElement(txt_LName).sendKeys(lname);
		
	}
	
	public void SetCompanyName(String comName) {
		
		driver.findElement(Company_Name).sendKeys(comName);
	}
	
	public void ClickOnSaveBtn() {
		
		driver.findElement(save_btn).click();
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
