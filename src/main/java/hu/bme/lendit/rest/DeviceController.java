package hu.bme.lendit.rest;

import hu.bme.lendit.rest.model.Device;
import hu.bme.lendit.rest.model.OwnerDevice;
import hu.bme.lendit.rest.model.UserDevice;
import hu.bme.lendit.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DeviceController {

    private DeviceService deviceService;

    @Autowired
    public DeviceController(DeviceService deviceService) {
        this.deviceService = deviceService;
    }

    @GetMapping("/devices")
    public List<Device> getAllDevice(){
        return deviceService.getAllDevice();
    }
    
    @GetMapping("/device/owner")
	public List<OwnerDevice> getAvailableDevices(){
		return deviceService.getAvailableDevices();
	}
    
    @GetMapping("/device/user")
	public List<UserDevice> getAllDevices(){
		return deviceService.getAllDevices();
	}

}
