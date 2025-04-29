import React, { useState } from 'react';
import { cleaningServiceType, scriptConfig, useOfService } from '../../Configurations/form-configs';
import { useForm } from 'react-hook-form';
import { titleConfigs } from '../../Configurations/common-configs';

function QuoteForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);

    const submitForm = async (data) => {
        setLoading(true);
        try {
            const response = await fetch(`https://script.google.com/macros/s/${scriptConfig.deploymentId}/exec`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                mode: 'no-cors'
            });

            console.log(response.status)
            alert( ([200, 302, 0].includes(response.status) || response.ok || response.redirected) ? 'Form submitted successfully!': (response.message || 'Form submitted fail!' ) );
            reset();
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='mainForm container py-5'>
            <h2 className="text-center mb-4">{titleConfigs.formTitle}</h2>
            <form className="row g-3 mx-auto" style={{ maxWidth: '1200px' }} onSubmit={handleSubmit(submitForm)}>
                
                <div className="col-md-12 form-floating">
                    <input 
                        type="text"
                        className={`form-control ${errors.fname ? 'is-invalid' : ''}`} 
                        id="firstName" 
                        placeholder="First Name"
                        {...register("name", { required: "First name is required" })}
                    />
                    <label htmlFor="firstName">Name *</label>
                    {errors.fname && <div className="invalid-feedback">{errors.fname.message}</div>}
                </div>

                {/* <div className="col-md-6 form-floating">
                    <input 
                        type="text"
                        className={`form-control ${errors.lname ? 'is-invalid' : ''}`} 
                        id="lastName" 
                        placeholder="Last Name"
                        {...register("lname", { required: "Last name is required" })}
                    />
                    <label htmlFor="lastName">Last Name *</label>
                    {errors.lname && <div className="invalid-feedback">{errors.lname.message}</div>}
                </div> */}

                <div className="col-md-6 form-floating">
                    <input 
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                        id="email"
                        placeholder="Email"
                        {...register("email", { 
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    <label htmlFor="email">Email *</label>
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>

                <div className="col-md-6 form-floating">
                    <input 
                        type="tel"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`} 
                        id="phone"
                        placeholder="Phone Number"
                        {...register("phone", { 
                            required: "Phone number is required",
                            pattern: {
                                value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
                                message: "Invalid phone number"
                            }
                        })}
                    />
                    <label htmlFor="phone">Phone Number *</label>
                    {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                </div>

                <div className="col-md-6 form-floating">
                    <select 
                        className={`form-select ${errors.serviceType ? 'is-invalid' : ''}`}
                        id="service"
                        {...register("serviceType", { required: "Service type is required" })}
                        defaultValue={0}
                    >
                        <option value={0} disabled >Choose...</option>
                        {cleaningServiceType.map(type => 
                            <option key={type.value} value={type.value}>{type.name}</option>
                        )}
                    </select>
                    <label htmlFor="service">Type of the Builders Cleaning Service *</label>
                    {errors.serviceType && <div className="invalid-feedback">{errors.serviceType.message}</div>}
                </div>

                <div className="col-md-6 form-floating">
                    <select 
                        className={`form-select ${errors.useService ? 'is-invalid' : ''}`}
                        id="useService"
                        {...register("useService", { required: "Use of service is required" })}
                        defaultValue={0}
                    >
                        <option value={0} disabled >Choose...</option>
                        {useOfService.map(type => 
                            <option key={type.value} value={type.value}>{type.name}</option>
                        )}
                    </select>
                    <label htmlFor="useService">Use of the Service *</label>
                    {errors.useService && <div className="invalid-feedback">{errors.useService.message}</div>}
                </div>

                {/* <div className="col-md-4 form-floating">
                    <select 
                        className={`form-select ${errors.purpose ? 'is-invalid' : ''}`}
                        id="inquiry"
                        {...register("purpose", { required: "Purpose is required" })}
                        defaultValue={0}
                    >
                        <option value={0} disabled >Choose...</option>
                        {purposeOfInquiry.map(type => 
                            <option key={type.value} value={type.value}>{type.name}</option>
                        )}
                    </select>
                    <label htmlFor="inquiry">Purpose of the Inquiry *</label>
                    {errors.purpose && <div className="invalid-feedback">{errors.purpose.message}</div>}
                </div> */}

                <div className="col-12 form-floating">
                    <input 
                        type="text"
                        className="form-control" 
                        id="siteLocation"
                        placeholder="Site Location"
                        {...register("siteLocation")}
                    />
                    <label htmlFor="siteLocation">Site Location</label>
                </div>

                {/* <div className="col-12">
                    <label htmlFor="photoUpload" className="form-label">Upload Photo</label>
                    <div className="input-group mb-3">
                        <input 
                            type="file"
                            className="form-control" 
                            id="photoUpload"
                            accept="image/*"
                            {...register("photo")}
                        />
                    </div>
                    <div className="form-text">Max image size is 25MB</div>
                </div> */}

                <div className="col-md-6 form-floating">
                    <input 
                        type="text"
                        className="form-control" 
                        id="city"
                        placeholder="city"
                        {...register("city")}
                    />
                    <label htmlFor="promoCode">City/Town</label>
                </div>

                <div className="col-md-6 form-floating">
                    <input 
                        type="text"
                        className="form-control" 
                        id="state"
                        placeholder="State"
                        {...register("state")}
                    />
                    <label htmlFor="membershipNumber">State/Region</label>
                </div>

                <div className="col-md-6 form-floating">
                    <input 
                        type="text"
                        className="form-control" 
                        id="zip"
                        placeholder="Zip"
                        {...register("zip")}
                    />
                    <label htmlFor="promoCode">ZIP/Postal Code</label>
                </div>

                <div className="col-md-6 form-floating">
                    <input 
                        type="text"
                        className="form-control" 
                        id="schedule"
                        placeholder="Schedule"
                        {...register("schedule")}
                    />
                    <label htmlFor="membershipNumber">Schedule</label>
                </div>

                <div className="col-12 form-floating">
                    <textarea 
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                        id="message"
                        placeholder="Write a message"
                        style={{ height: '100px' }}
                        {...register("message", { required: "Message is required" })}
                    ></textarea>
                    <label htmlFor="message">Write a message *</label>
                    {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                </div>

                <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary px-4 py-2" disabled={loading}>
                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Submitting...
                            </>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </div>

            </form>
        </div>
    );
}

export default QuoteForm;
