package hu.bme.lendit;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import hu.bme.lendit.database.repository.DeviceRepository;
import hu.bme.lendit.rest.model.OwnerDevice;
import hu.bme.lendit.rest.model.UserDevice;

@SpringBootTest
public class LenditApplicationTests {

	UserDevice userDevice = new UserDevice(1,"laptop","elektronika",300);
	
	OwnerDevice ownerDevice =  new OwnerDevice(1,"laptop","elektronika",true);
	
	@Autowired
	private DeviceRepository deviceRepository;
	
	@Test
	public void contextLoads() {
	}
	
	@Test
	void assertUserDeviceNotNull() {
		assertNotNull(userDevice);
	}
	
	@Test
	void assertUserDeviceId() {
		assertEquals(1, userDevice.getId());
	}
	
	@Test
	void assertUserDevice() {
		String userDeviceData = "id=" + userDevice.getId().toString() + ","
				+ "name=" + userDevice.getName() + ","
				+ "category=" + userDevice.getCategory() + ","
				+ "price=" + userDevice.getPrice().toString();
		
		assertEquals("id=1,name=laptop,category=elektronika,price=300", userDeviceData);
	}
	
	@Test
	void assertOwnerDeviceNotNull() {
		assertNotNull(ownerDevice);
	}
	
	@Test
	void assertOwnerDeviceId() {
		assertEquals(1, ownerDevice.getId());
	}
	
	@Test
	void assertOwnerDevice() {
		String ownerDeviceData = "id=" + ownerDevice.getId().toString() + ","
				+ "name=" + ownerDevice.getName() + ","
				+ "category=" + ownerDevice.getCategory() + ","
				+ "available=" + ownerDevice.getAvailable().toString();
		
		assertEquals("id=1,name=laptop,category=elektronika,available=true", ownerDeviceData);
	}
	
	@Test
	void assertDeviceRepositoryNotNull() {
		assertNotNull(deviceRepository);
	}
	
	@Test
	void assertDeviceRepositoryAvailableDevicesNotNull() {
		List<UserDevice> allDevices = deviceRepository.findAllAvailableDevices();
		
		assertNotNull(allDevices);
	}
	
	@Test
	void assertDeviceRepositoryAvailableDevices() {
		List<UserDevice> allDevices = deviceRepository.findAllAvailableDevices();
		UserDevice oneUserDevice = allDevices.get(6);
		String oneUserDeviceData = "id=" + oneUserDevice.getId().toString() + ","
				+ "name=" + oneUserDevice.getName() + ","
				+ "category=" + oneUserDevice.getCategory() + ","
				+ "price=" + oneUserDevice.getPrice().toString();
		
		assertEquals("id=113,name=Optical mouse,category=IT,price=20", oneUserDeviceData);
	}
	
	@Test
	void assertDeviceRepositoryAllDevicesNotNull() {
		List<OwnerDevice> availableDevices = deviceRepository.findAllDevices();
		
		assertNotNull(availableDevices);
	}
	
	@Test
	void assertDeviceRepositoryAllDevices() {
		List<OwnerDevice> availableDevices = deviceRepository.findAllDevices();
		OwnerDevice oneOwnerDevice = availableDevices.get(8);
		String oneOwnerDeviceData = "id=" + oneOwnerDevice.getId().toString() + ","
				+ "name=" + oneOwnerDevice.getName() + ","
				+ "category=" + oneOwnerDevice.getCategory() + ","
				+ "available=" + oneOwnerDevice.getAvailable().toString();
		
		assertEquals("id=10,name=Kitchen scale,category=KITCHEN,available=true", oneOwnerDeviceData);
	}
}
