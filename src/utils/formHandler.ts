interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
}

export const handleFormSubmit = async (formData: FormData): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        _replyto: formData.email,
        _subject: `New Contact Form Submission from ${formData.name}`,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'Oops! Something went wrong. Please try again.',
    };
  }
}; 