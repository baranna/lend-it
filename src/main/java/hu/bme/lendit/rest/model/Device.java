package hu.bme.lendit.rest.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
	    "id",
        "name",
        "price",
        "available",
        "category"
})
public class Device implements Serializable {

	@JsonProperty("id")
    private long id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("price")
    private Integer price;
    @JsonProperty("available")
    private Boolean available;
    @JsonProperty("category")
    private Category category;

    private final static long serialVersionUID = -6887785896865262380L;

    @JsonProperty("id")
    public long getId() {
        return id;
    }

    @JsonProperty("id")
    public void setId(long id) {
        this.id = id;
    }
    
    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("name")
    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty("price")
    public Integer getPrice() {
        return price;
    }

    @JsonProperty("price")
    public void setPrice(Integer price) {
        this.price = price;
    }

    @JsonProperty("available")
    public Boolean getAvailable() {
        return available;
    }

    @JsonProperty("available")
    public void setAvailable(Boolean available) {
        this.available = available;
    }

    @JsonProperty("category")
    public Category getCategory() {
        return category;
    }

    @JsonProperty("category")
    public void setCategory(Category category) {
        this.category = category;
    }


    @Override
    public String toString() {
        return new ToStringBuilder(this).append("id", id).append("name", name).append("price", price).append("available", available).append("category", category).toString();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder().append(id).append(name).append(available).append(category).append(price).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof Device) == false) {
            return false;
        }
        Device rhs = ((Device) other);
        return new EqualsBuilder().append(id, rhs.id).append(name, rhs.name).append(available, rhs.available).append(category, rhs.category).append(price, rhs.price).isEquals();
    }

}