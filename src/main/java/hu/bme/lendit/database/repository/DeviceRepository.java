package hu.bme.lendit.database.repository;

import hu.bme.lendit.database.entity.DeviceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceRepository extends JpaRepository<DeviceEntity,Long> {
}
