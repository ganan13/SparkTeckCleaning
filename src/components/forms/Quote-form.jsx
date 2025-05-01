import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { cleaningServiceType, scriptConfig, useOfService } from '../../Configurations/form-configs';
import { titleConfigs } from '../../Configurations/common-configs';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Quote-form.css'

function QuotePopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const popupRef = useRef(null);
    const overlayRef = useRef(null);

    useGSAP(() => {
        if (isOpen) {
            gsap.from(overlayRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            });

            gsap.from(popupRef.current, {
                y: 100,
                opacity: 0,
                duration: 0.5,
                ease: "back.out(1.2)"
            });
        }
    }, [isOpen]);

    const togglePopup = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const closePopup = () => {
        gsap.to(popupRef.current, {
            y: 100,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                setIsOpen(false);
                document.body.style.overflow = '';
            }
        });
    };

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
            closePopup();
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="quote-cta-container" style={{ 
                textAlign: 'center',
                margin: '3rem auto',
                maxWidth: '800px',
                padding: '0 1rem'
            }}>
                <p style={{
                    fontSize: '1.2rem',
                    color: '#013F69',
                    marginBottom: '1rem',
                    fontFamily: 'Poppins, sans-serif'
                }}>
                    You are just 30 seconds away from completing your enquiry!
                </p>
                <button 
                    onClick={togglePopup}
                    className="book-now-btn"
                    style={{
                        backgroundColor: '#46973D',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        padding: '12px 24px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(70, 151, 61, 0.3)',
                        transition: 'all 0.3s ease'
                    }}
                >
                    Book Now
                </button>
            </div>

            {isOpen && (
                <div 
                    ref={overlayRef}
                    className="popup-overlay"
                    onClick={closePopup}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1000,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end'
                    }}
                >
                    <div 
                        ref={popupRef}
                        className="popup-content"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            backgroundColor: 'white',
                            width: '100%',
                            maxWidth: '800px',
                            maxHeight: '90vh',
                            borderTopLeftRadius: '20px',
                            borderTopRightRadius: '20px',
                            padding: '2rem',
                            overflowY: 'auto',
                            boxShadow: '0 -5px 30px rgba(0, 0, 0, 0.1)',
                            scrollbarWidth: 'none'
                        }}
                    >
                        <div className="popup-header" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            <h2 style={{ color: '#013F69', margin: 0 }}>{titleConfigs.formTitle}</h2>
                            <button 
                                onClick={closePopup}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    color: '#666'
                                }}
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSubmit(submitForm)}>
                            <div className="form-floating mb-3">
                                <input 
                                    type="text"
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                                    id="name" 
                                    placeholder="Name"
                                    {...register("name", { required: "Name is required" })}
                                />
                                <label htmlFor="name">Name *</label>
                                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                            </div>

                            <div className="form-floating mb-3">
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

                            <div className="form-floating mb-3">
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

                            <div className="form-floating mb-3">
                                <select 
                                    className={`form-select ${errors.serviceType ? 'is-invalid' : ''}`}
                                    id="service"
                                    {...register("serviceType", { required: "Service type is required" })}
                                    defaultValue={0}
                                >
                                    <option value={0} disabled>Choose...</option>
                                    {cleaningServiceType.map(type => 
                                        <option key={type.value} value={type.value}>{type.name}</option>
                                    )}
                                </select>
                                <label htmlFor="service">Type of the Builders Cleaning Service *</label>
                                {errors.serviceType && <div className="invalid-feedback">{errors.serviceType.message}</div>}
                            </div>

                            <div className="form-floating mb-3">
                                <select 
                                    className={`form-select ${errors.useService ? 'is-invalid' : ''}`}
                                    id="useService"
                                    {...register("useService", { required: "Use of service is required" })}
                                    defaultValue={0}
                                >
                                    <option value={0} disabled>Choose...</option>
                                    {useOfService.map(type => 
                                        <option key={type.value} value={type.value}>{type.name}</option>
                                    )}
                                </select>
                                <label htmlFor="useService">Use of the Service *</label>
                                {errors.useService && <div className="invalid-feedback">{errors.useService.message}</div>}
                            </div>

                            <div className="form-floating mb-3">
                                <input 
                                    type="text"
                                    className="form-control" 
                                    id="siteLocation"
                                    placeholder="Site Location"
                                    {...register("siteLocation")}
                                />
                                <label htmlFor="siteLocation">Site Location</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input 
                                    type="text"
                                    className="form-control" 
                                    id="city"
                                    placeholder="City/Town"
                                    {...register("city")}
                                />
                                <label htmlFor="city">City/Town</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input 
                                    type="text"
                                    className="form-control" 
                                    id="state"
                                    placeholder="State/Region"
                                    {...register("state")}
                                />
                                <label htmlFor="state">State/Region</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input 
                                    type="text"
                                    className="form-control" 
                                    id="zip"
                                    placeholder="ZIP/Postal Code"
                                    {...register("zip")}
                                />
                                <label htmlFor="zip">ZIP/Postal Code</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input 
                                    type="text"
                                    className="form-control" 
                                    id="schedule"
                                    placeholder="Schedule"
                                    {...register("schedule")}
                                />
                                <label htmlFor="schedule">Schedule</label>
                            </div>

                            <div className="form-floating mb-3">
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

                            <div className="d-flex justify-content-center mt-4">
                                <button 
                                    type="submit" 
                                    className="btn px-4 py-2" 
                                    disabled={loading}
                                    style={{
                                        backgroundColor: '#46973D',
                                        color: 'white',
                                        border: 'none',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Submitting...
                                        </>
                                    ) : (
                                        'Get Your Free Quote'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default QuotePopup;