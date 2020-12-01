package hu.bme.lendit.database.repository;

import hu.bme.lendit.database.entity.DeviceEntity;
import hu.bme.lendit.rest.model.OwnerDevice;
import hu.bme.lendit.rest.model.UserDevice;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceRepository extends JpaRepository<DeviceEntity,Long> {
	
	@Query("SELECT d FROM DeviceEntity d")
    List<DeviceEntity> findAllDevice();
	
	//Native:SELECT d.id, d.name, c.name, d.price FROM device d LEFT JOIN category c ON d.category=c.id WHERE d.available=TRUE
	@Query("SELECT new hu.bme.lendit.rest.model.UserDevice(d.id, d.name, c.name, d.price) FROM DeviceEntity d LEFT JOIN d.category c ON d.category=c.id WHERE d.available=TRUE")
	List<UserDevice> findAvailableDevices();
	
	//Native:SELECT d.id, d.name, c.name, d.available FROM device d LEFT JOIN category c ON d.category=c.id
    @Query("SELECT new hu.bme.lendit.rest.model.OwnerDevice(d.id, d.name, c.name, d.available) FROM DeviceEntity d LEFT JOIN d.category c ON d.category=c.id")
	List<OwnerDevice> findAllDevices();
	
}
