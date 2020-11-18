package hu.bme.lendit.service;

import hu.bme.lendit.database.entity.DeviceEntity;
import hu.bme.lendit.database.repository.DeviceRepository;
import hu.bme.lendit.rest.model.Device;
import hu.bme.lendit.rest.model.OwnerDevice;
import hu.bme.lendit.rest.model.UserDevice;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DeviceService {

    private final DeviceRepository deviceRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public DeviceService(DeviceRepository deviceRepository, ModelMapper modelMapper) {
        this.deviceRepository = deviceRepository;
        this.modelMapper = modelMapper;
    }

    public List<Device> getAllDevice(){
        List<DeviceEntity> devices = deviceRepository.findAll();

        return  devices.stream()
                .map(device -> modelMapper.map(device,Device.class))
                .collect(Collectors.toList());
    }
    
    public List<OwnerDevice> getAllDevices(){
		
        List<OwnerDevice> ownerDevices = deviceRepository.findAllDevices();

        return  ownerDevices;
    }

    public List<UserDevice> getAvailableDevices(){
        List<UserDevice> userDevices = deviceRepository.findAvailableDevices();

        return  userDevices;
    }
    
}
