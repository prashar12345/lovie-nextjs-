const category = [
    { id: 'home', name: 'Home Page' },
    { id: 'assessment', name: 'Assessment' },
]

const catName = (id) => {
    let ext = category.find(itm => itm.id == id)
    return ext ? ext.name : ''
}

const keys = [
    { key: 'homepage_welcome', english: 'Welcome To Naluri' },
    { key: 'save_btn', english: 'Save' },
    {
        key: 'welcome_description', cat: 'home',
        english: `e-MeSVIPP is a platform to help you gain awareness of your mental wellbeing and provide you Support and resources are available to help you cope with what you are going through. We recommend you to start your mental wellness journey by doing a quick mental health check.`
    },
    {
        key: 'welcomebottom_text', cat: 'home',
        english: `if you have been here before, click here to `
    },
    {
        key: 'login_link',
        english: `Login`
    },
    {
        key: "Let’sbegin_button", cat: 'home',
        english: `Let’s begin`
    },

    {
        key: 'home_footer',
        english: 'Know someone who might need mental or emotional support? Share this site'
    },

    {
        key: 'assessment_title',
        english: "Naluri's Mental Health Assessment "
    },

    {
        key: 'assessment_description',
        english: "Naluri utilises the Depression, Anxiety and Stress Scale (DASS-21) to conduct the Mental Health Assessment. "
    },
    {
        key: 'assessment_description1',
        english: "DASS-21 is a short standardised assessment consisting of 21 items that will help you determine your risk factors for depression, anxiety, and stress. While the assessment is an indicator of risk factors, it is not intended to diagnose any conditions. "
    },
    {
        key: 'assessment_description2',
        english: "You are encouraged to share your DASS-21 results with a mental health professional for a better understanding. "
    },
    {
        key: 'start_button',
        english: 'start '
    },
    {
        key: 'assessment_footer',
        english: "By continuing you agree to Naluri's Privacy Policy, Terms and Conditions. "

    },
    {
        key: 'privacy_text',
        english: "Privacy Policy. "
    },
    {
        key: 'termsconditions_text',
        english: "Terms and Conditions. "
    },
    {
        key: 'home_menu',
        english: "home "
    },
    {
        key: 'booking_menu',
        english: "booking "
    },

    {
        key: 'login_menu',
        english: "  Login "
    },
    {
        key: 'register_menu',
        english: "Register an account "
    },
    {
        key: 'profile_menu',
        english: "profile "
    },
    {
        key: 'settings_menu',
        english: "settings "
    },
    {
        key: 'logout_menu',
        english: "logout "
    },

    {
        key: 'questions_text',
        english: "questions "
    },
    {
        key: 'multiplechoice_text',
        english: "multiple choice "
    },
    {
        key: 'lessthan_text',
        english: "less than "
    },
    {
        key: 'min_text',
        english: "min"
    },

    {
        key: 'hi_text',
        english: "hi"
    },
    {
        key: 'dashboard_heading',
        english: "Your Consultation Sessions"
    },

    {
        key: 'ic_no_heading',
        english: "IC No. or Passport No."
    },
    {
        key: 'appointmentdate_heading',
        english: "Appointment Date"
    },
    {
        key: 'phonenumber_heading',
        english: "Phone Number"
    },
    {
        key: 'status_heading',
        english: "Status"
    },

    {
        key: 'high_levels',
        english: "High Levels"
    },

    {
        key: 'date_time_heading',
        english: "Date & Time"
    },

    {
        key: 'dashboard_title',
        english: "Based on your answers, you seem to be experiencing Moderate Levels of anxiety and depression"
    },

    {
        key: 'risk_text',
        english: "Risk"
    },
    {
        key: 'moderate_text',
        english: "Moderate"
    },
    {
        key: 'dashboard_paragraph',
        english: "of dispression, anxiety and stress symptoms"
    },

    {
        key: 'dashboard_question_heading',
        english: "What does your result mean?"
    },
    {
        key: 'dashboard__answer',
        english: "Your results indicate that anxiety and depression symptoms may be affecting your overall well-being. If you have difficulty sleeping, notice any changes to your appetite, or are struggling to complete tasks at work or at home, we recommend seeking support from a mental health professional"
    },

    {
        key: 'dashboard__suggestions_hedding',
        english: "Here are some suggestions on what you can do"
    },

    {
        key: 'healthcare_professional_hedding',
        english: "Speak to your local healthcare professional"
    },

    {
        key: 'counsellor_ready_text',
        english: "Our Counsellor ready to help and support you"
    },

    {
        key: 'through_Whatsapp_button',
        english: "Reach out through Whatsapp"
    },

    {
        key: 'self-help_text',
        english: "Explore self-help tools and resources"
    },

    {
        key: 'stressed_out_text',
        english: " Signs you are too stressed out"
    },

    {
        key: 'unlock_positivity_text',
        english: " Tips to unlock positivity"
    },
    {
        key: 'download_result_button',
        english: "Download result"
    },
    {
        key: 'dashboard_text',
        english: "Dashboard"
    },
    {
        key: 'assessments_text',
        english: "Assessments"
    },
    {
        key: 'consultation_text',
        english: "Consultation Sessions"
    },
    {
        key: 'users_text',
        english: "Users"
    },
    {
        key: 'counsellors_text',
        english: "Counsellors"
    },
    {
        key: 'appointment_type',
        english: "Appointment Type"
    },
    {
        key: 'in_the_past_week',
        english: "In the past week"
    },

    {
        key: 'consultation_drop',
        english: "Consultation"
    },
    {
        key: 'book_a_sessiont',
        english: "Book a Session"
    },

    {
        key: 'mode_of_consultation',
        english: "Mode of consultation"
    },
    {
        key: 'language_text',
        english: "Language"
    },
    {
        key: 'expertise_text',
        english: "Expertise"
    },
    {
        key: 'country_text',
        english: "Country"
    },

    {
        key: 'state_text',
        english: "State"
    },

    {
        key: 'city_text',
        english: "City"
    },

    {
        key: 'time zone_text',
        english: "Time Zone"
    },

    {
        key: 'appointment_type_text',
        english: "Appointment Type"
    },
    {
        key: 'clear_text',
        english: "Clear"
    },

    {
        key: 'talk_hedding_text',
        english: "Need to talk?"
    },
    {
        key: 'talk_text',
        english: "Get the support you need from a professional you can trust. Book a private and confidential consultation session with any Naluri coach."
    },

    {
        key: 'talk_texttwo',
        english: "Need help getting started? Email consultation@naluri.life for advice."
    },
    {
        key: 'bookingpolicies_link',
        english: "Booking Policies"
    },

    {
        key: 'policies_text',
        english: "All counselling services are private and confidential. Your personal information and discussions will not be shared with any third parties, including your employer for corporate clients, in accordance with Naluri's policy privacy."
    },

    {
        key: 'view_User',
        english: "View User"
    },
    {
        key: 'details_text',
        english: "Details"
    },

    {
        key: 'first_name',
        english: "First Name"
    },

    {
        key: 'last_name',
        english: "Last Name"
    },

    {
        key: 'email_text',
        english: "Email"
    },

    {
        key: 'role_text',
        english: "Role"
    },
    {
        key: 'icnumber_text',
        english: "IC Number"
    },

    {
        key: 'mobileno_text',
        english: "Mobile No"
    },
    {
        key: 'timezone',
        english: "Time Zone"
    },

    {
        key: 'nationality_text',
        english: "nationality"
    },


    {
        key: 'gender_text',
        english: "Gender"
    },


    {
        key: 'date_of_birth',
        english: "Date of Birth"
    },

    {
        key: 'male_text',
        english: "Male"
    },

    {
        key: 'female_text',
        english: " Female"
    },


    {
        key: 'currrent_password',
        english: " Currrent Password"
    },

    {
        key: 'new_password',
        english: " New Password"
    },

    {
        key: 'confirm_password',
        english: "Confirm Password"
    },

    {
        key: 'settings_text',
        english: "Settings"
    },


    {
        key: 'preference_text',
        english: "Preference"
    },

    {
        key: 'attend_text',
        english: "Attend"
    },

    {
        key: 'calendar_view_text',
        english: "Calendar View"
    },


    {
        key: 'manage_appointment_text',
        english: " Manage Appointment"
    },

    {
        key: 'view_profile_text',
        english: "View Profile"
    },


    {
        key: 'added_by_text',
        english: "Added By"
    },
    {
        key: 'note_text',
        english: "Note"
    },
    {
        key: 'date_text',
        english: "Date"
    },

    {
        key: 'view_case_note',
        english: "View Case Note"
    },

    {
        key: 'name_text',
        english: "Name"
    },

    {
        key: 'action_text',
        english: "Action"
    },

    {
        key: 'case_note_text',
        english: "Case Note"
    },


    {
        key: 'add_consultation_sessions',
        english: "Add Consultation Sessions"
    },
    {
        key: 'send_consultation_sessions_link',
        english: "Add Consultation Sessions"
    },
    {
        key: 'availability_text',
        english: "Availability"
    },

    {
        key: 'cancellation_requests_text',
        english: "Cancellation Requests"
    },
    {
        key: 'all_users_text',
        english: "All Users"
    },

    {
        key: 'health_clinic_text',
        english: "Health Clinic"
    },



    {
        key: 'clinic_admin_text',
        english: "Clinic Admin"
    },
    {
        key: 'clinic_name',
        english: "Clinic Name"
    },
    {
        key: 'reschedule_time_text',
        english: "Reschedule Time"
    },
    {
        key: 'languages_text',
        english: "Languages"
    },

    {
        key: 'add_expertise_text',
        english: "Add Expertise"
    },

    {
        key: 'add_languages_text',
        english: "Add Languages"
    },


    {
        key: 'homepage_hedding',
        english: "How is Your Mental Health?"
    },
    {
        key: 'homepage_paira',
        english: "Find out more about your mental health, and access resources to manage and maintain your mental wellness."
    },

    {
        key: 'startassessment_btn',
        english: "Start Assessment"
    },

    {
        key: 'self_equipped',
        english: "Maintain Your Mental Well-being"
    },

    {
        key: 'self_equipped_paira',
        english: "Here are practical guides, tips, and best practices to help you maintain your well-being through self-paced lessons, articles, and webinars."
    },

    {
        key: 'explore_assessmentbtn',
        english: "Explore_Assessmentbtn"
    },

    {
        key: 'homequestion',
        english: "What is the difference between depression, anxiety and stress"
    },

    {
        key: 'homequestion_two',
        english: "  What should I do if I don't feel safe at home?"
    },
    {
        key: 'explore_library',
        english: "Explore library"
    },
    {
        key: 'talk_to_professionals',
        english: "Talk to Our Care Providers"
    },

    {
        key: 'professionals_paira',
        english: "Schedule a therapy session or access our 24/7 chat with our licensed counsellors"
    },

    {
        key: 'professionals_paira_two',
        english: "Complete assessment to get help"
    },

    {
        key: 'consultation_type',
        english: "Consultation Type"
    },

    {
        key: 'clinic_address',
        english: "Clinic Address"
    },
    {
        key: 'result_text',
        english: "Result"
    },

    {
        key: 'type_text',
        english: "Type"
    },

    {
        key: 'retake_assessment',
        english: "Retake Assessment"
    },

    {
        key: 'userdashboard_text',
        english: "Based on your answers, you seem to be experiencing Severe Levels of depression,anxiety and stress"
    },

    {
        key: 'userdashboard_text',
        english: "Based on your answers, you seem"
    },

    {
        key: 'userdashboard_text_one',
        english: "to be experiencing"
    },

    {
        key: 'levels_text',
        english: "Levels"
    },

    {
        key: 'of_depression,',
        english: "of depression"
    },


    {
        key: 'anxiety_and_stress',
        english: "anxiety and stress,"
    },

    {
        key: 'dash_rulttext',
        english: "What does your result mean?"
    },

    {
        key: 'low_text',
        english: "Low"
    },


    {
        key: 'moderate_text',
        english: "Moderate"
    },

    {
        key: 'depression_text',
        english: "Depression"
    },

    {
        key: 'anxiety_text',
        english: "Anxiety"
    },

    {
        key: 'stress_text',
        english: "Stress"
    },

    {
        key: 'normal_text',
        english: "Normal"
    },


    {
        key: 'normal_result',
        english: "Your results indicate that negative emotional states are likely not affecting your overall well-being. However, if you have difficulty sleeping, notice any changes to your appetite, or are struggling to complete tasks at work or at home, we recommend seeking support from a mental health professional."
    },

    {
        key: 'mild_result',
        english: "Your results indicate that anxiety and depression symptoms may be affecting your overall well-being. If you have difficulty sleeping, notice any changes to your appetite, or are struggling to complete tasks at work or at home, we recommend seeking support from a mental health professional"
    },

    {
        key: 'severe_result',
        english: "Your results indicate that anxiety, depression and stress symptoms are affecting your overall well-being, and you would benefit from consulting a psychologist or counsellor through a one-on-one consultation through Whatsapp, where they will be able to advise you on how to navigate these challenges."
    },

    {
        key: 'save_your_result',
        english: "Save your result"
    },


    {
        key: 'Severe_text',
        english: "Severe"
    },

    {
        key: 'mild_text',
        english: "Mild"
    },

    {
        key: 'consultation_text',
        english: "Consultation"
    },

    {
        key: 'resources_text',
        english: "Resources"
    },

    {
        key: 'about_us_text',
        english: "About us"
    },
    {
        key: 'faq_text',
        english: "FAQ"
    },

    {
        key: 'consultation_session',
        english: "Consultation Session"
    },

    {
        key: 'consultation_para',
        english: "Choose a date and time that fit your schedule to get started or search your previous counsellor"
    },

    {
        key: 'filters_text',
        english: "Filters"
    },

    {
        key: 'select_date_text',
        english: "Select Date"
    },

    {
        key: 'choose_time',
        english: "Choose Time"
    },


    {
        key: 'consultation_preference',
        english: "Consultation Preference"
    },

    {
        key: 'search_text',
        english: "Search"
    },

    {
        key: 'filter_text',
        english: "Filter"
    },


    {
        key: 'search_counsellor',
        english: "Search Counsellor"
    },

    {
        key: 'counsellor_name',
        english: "Counsellor name"
    },

    {
        key: 'video_consultation',
        english: "Video Consultation"
    },

    {
        key: 'in-person_consultation',
        english: "In-person Consultation"
    },
    {
        key: 'select_country',
        english: "Select Country"
    },
    {
        key: 'select_state',
        english: "Select State"
    },

    {
        key: 'select_city',
        english: "Select City"
    },


    {
        key: 'select_language',
        english: "Select Language"
    },

    {
        key: 'select_expertise',
        english: "Select Expertise"
    },

    {
        key: 'select_time_zone',
        english: "Select Time Zone"
    },


    {
        key: 'select_appointment_type',
        english: "Select Appointment Type"
    },

    {
        key: 'clear_all',
        english: "Clear all"
    },

    {
        key: 'show_button',
        english: "Show"
    },

    {
        key: 'time_slot',
        english: "Time Slot"
    },

    {
        key: 'time_zone_text',
        english: "Time Zone"
    },


    {
        key: 'accreditations&membership',
        english: "Accreditations & Membership"
    },

    {
        key: 'aspecialises_in',
        english: "specialises in Addication, Anger Management"
    },

    {
        key: 'location_text',
        english: "location"
    },

    {
        key: 'time_text',
        english: "Time"
    },

    {
        key: 'not_available',
        english: "Not available"
    },

    {
        key: 'confirm_booking',
        english: "Confirm booking"
    },


    {
        key: 'booking_confirm_title',
        english: "Are you sure you able to attend to the consultation?"
    },


    {
        key: 'booking_confirm_detail',
        english: "If you can’t attend to the location, you can change the consultation to whatsapp video consultation instead."
    },

    {
        key: 'yes_text',
        english: "Yes"
    },
    {
        key: 'no_text',
        english: "No"
    },

    {
        key: 'personal_details',
        english: "Personal Details"
    },

    {
        key: 'Back_text',
        english: "Back"
    },

    {
        key: 'home_address',
        english: "Home Address"
    },

    {
        key: 'emergency_contact',
        english: "Emergency Contact"
    },

    {
        key: 'topic_of_discussion',
        english: "Topic of Discussion"
    },

    {
        key: 'consultation_service_consent_form',
        english: "Consultation Service Consent Form"
    },
    {
        key: 'full_name',
        english: "Full Name"
    },

    {
        key: 'street_address',
        english: "Street address"
    },

    {
        key: 'zipcode_text',
        english: "Zipcode"
    },

    {
        key: 'guardian_name',
        english: "Guardian Name"
    },
    {
        key: 'guardian_relationship',
        english: "Guardian Relationship"
    },
    {
        key: 'emergency_contact_check',
        english: " I confirm that the details provided are accurate and I provide Ministry of Health Malaysia with permission to contact the emergency contact person should Ministry of Health Malaysia perceive the need to do so in case of emergency, crisis or any relevant circumstances. *"
    },

    {
        key: 'main_concern_to_talk_about',
        english: "Main concern to talk about"
    },
    {
        key: 'consultation_service_paira',
        english: "Kindly be informed that you would have to read through the consultation consent form and provide your personal details to book a session. The purpose of the form is to provide you with the important principles in our services so that you will proceed based on accurate, informed expectations. To read details on the consultation consent,"
    },

    {
        key: 'consultation_service_check_one',
        english: "I acknowledge that I have read and agree to the clauses stated in the consent form for the duration of the relationship with my consultant, including any additional sessions I may have."
    },

    {
        key: 'consultation_service_check_two',
        english: "In submitting this form I give consent to Ministry of Health Malaysia to store, process and analyse my personal information and case notes. I understand that this information will only be accessed by necessary staff, my data will be held securely and will not be distributed to third parties."
    },

    {
        key: 'consultation_booking_summary',
        english: "Consultation Booking Summary"
    },

    {
        key: 'title_text',
        english: "title"
    },

    {
        key: 'when_text',
        english: "When"
    },


    {
        key: 'change_date&time',
        english: "Change Date & time"
    },


    {
        key: 'book_appointment',
        english: "Book Appointment"
    },

    {
        key: 'consultation_booking_successfully',
        english: "Consultation Booking Successfully"
    },

    {
        key: 'back_home',
        english: "Back Home"
    },

    {
        key: 'consultation_appointment_with',
        english: "Consultation Appointment with"
    },

    {
        key: 'back_button',
        english: "Back"
    },

    {
        key: 'counsellor_newtext',
        english: "Counsellor"
    },

    {
        key: 'level_newtext',
        english: "Level"
    },

    {
        key: 'add_appointment_type',
        english: "Add Appointment Type"
    },

    {
        key: 'actions_text',
        english: "Actions"
    },

    {
        key: 'all_counsellors',
        english: "All Counsellors"
    },

    {
        key: 'invite_counsellor_button',
        english: "  Invite Counsellor"
    },

    {
        key: 'audit_trail_text',
        english: "Audit Trail"
    },

    {
        key: 'updated_at',
        english: "Updated At"
    },
    {
        key: 'updated_text',
        english: "Updated Text"
    },

    {
        key: 'close_btutton',
        english: "Close"
    },

    {
        key: 'send_btutton',
        english: "Send"
    },

    {
        key: 'add_text',
        english: "Add"
    },
    {
        key: 'time_text',
        english: "Time"
    },

    {
        key: 'select_option',
        english: "Select Option"
    },

    {
        key: 'edit_profile',
        english: "Edit Profile"
    },
    {
        key: 'change_password',
        english: " Change Password"
    },
    {
        key: 'appointment_reminder',
        english: "Appointment Reminder"
    },
    {
        key: 'my_users_text',
        english: "My Users"
    },
    {
        key: 'appointment_proposal',
        english: "Appointment Proposal"
    },
    {
        key: 'reschedule_requests',
        english: "Reschedule Requests"
    },
    {
        key: 'view_consultation_session',
        english: "View Consultation Session"
    },
    {
        key: 'appointment_detail',
        english: "Appointment Detail"
    },
    {
        key: 'appointment_time',
        english: "Appointment Time"
    },

    {
        key: 'added_case_note',
        english: "Added Case Note"
    },
    {
        key: 'did_the_user_attend_the_session',
        english: "Did the user attend the session?"
    },
    {
        key: 'user_name',
        english: "User Name"
    },

    {
        key: "counsellor's_Name",
        english: "Counsellor's Name"
    },
    {
        key: "counsellor's_phone_number",
        english: "Counsellor's Phone Number"
    },

    {
        key: "cancel_button",
        english: "Cancel"
    },

    {
        key: "view_intake_form",
        english: "View Intake form"
    },

    {
        key: "add_consultation_sessions",
        english: "Add Consultation Sessions"
    },
    {
        key: "add_text",
        english: "Add"
    },
    {
        key: "user_text",
        english: "User"
    },

    {
        key: "case_notes",
        english: "Case Notes"
    },

    {
        key: "overall_result",
        english: "Overall Result"
    },
    {
        key: "depression_score",
        english: "Depression Score"
    },

    {
        key: "anxiety_score",
        english: "Anxiety Score"
    },

    {
        key: "view_note",
        english: "View Note"
    },
    {
        key: "previous_consultation",
        english: "Previous Consultation"
    },

    {
        key: "upcoming_consultation",
        english: "Upcoming Consultation"
    },

    {
        key: "assessment_text",
        english: "Assessment"
    },


    {
        key: "profile_details",
        english: " Profile Details"
    },

    {
        key: "healthclinic_text",
        english: "healthclinic"
    },

    {
        key: "edit_counsellor",
        english: "Edit Counsellor"
    },

    {
        key: 'add_appointment_type',
        english: " Add Appointment Type"
    },

    {
        key: "counsellor's_availability",
        english: "Counsellor's Availability"
    },
    {
        key: "recent_result",
        english: "Recent Result"
    },

    {
        key: "6_tips_to_cope_with_anxiety",
        english: "6 tips to cope with anxiety"
    },

    {
        key: "sings_you_are_too_stressed_out",
        english: "Sings you are too stressed out"
    },
    {
        key: "tips_to_unlock_positivity",
        english: "Tips to unlock positivity"
    },
    {
        key: "family_text",
        english: "Family"
    },

    {
        key: "issue_text",
        english: "Issue"
    },

    {
        key: "financial_text",
        english: "Financial"
    },

    {
        key: "stress_text",
        english: "Stress"
    },
    {
        key: "Work_text",
        english: "Work"
    },

    {
        key: "here_are_some_resources_to_promote_your_mental_wellbeing",
        english: "Here are some resources to promote your mental wellbeing"
    },


    {
        key: "past_results",
        english: "Past Results"
    },


    {
        key: "extremely_severe",
        english: "Extremely severe"
    },

    {
        key: "high_text",
        english: "High"
    },

    {
        key: "view_assessment",
        english: "View Assessment"
    },

    {
        key: "text_over_the_last_two_weeks",
        english: "Over the last 2 weeks, how often have you been bothered by the following problems?"
    },

    {
        key: "items_text",
        english: "Items"
    },

    {
        key: "answers_text",
        english: "Answers"
    },

    {
        key: "scores_text",
        english: "Scores"
    },

    {
        key: "appointment_reminder",
        english: "Appointment Reminder"
    },

    {
        key: "add_appointment_reminder",
        english: "Add Appointment Reminder"
    },
    {
        key: "health_text",
        english: "Health"
    },

    {
        key: "update_button",
        english: "Update"
    },


    {
        key: "consultation_preference",
        english: "Consultation Preference"
    },

    {
        key: "each_session_is",
        english: "Each session is"
    },


    {
        key: "minute_consultation",
        english: "minute consultation"
    },

    {
        key: "question_text",
        english: "Question"
    },

    {
        key: "there_are_no_questions_for",
        english: "There are no questions for"
    },

    {
        key: "already_have_an_account",
        english: "Already have an account"
    },
    {
        key: "login_an_account_to_view_your_result",
        english: "Login an account to view your result"
    },

    {
        key: "privacy_policy_text",
        english: "Please accept privacy policy and terms and conditions"
    },


    {
        key: "not_matched",
        english: "Comfirm Password is not matched with New Password"
    },

    {
        key: "malaysian_text",
        english: "Malaysian"
    },

    {
        key: "non-malaysian",
        english: "Non-Malaysian"
    },

    {
        key: "all_text",
        english: "All"
    },

    {
        key: "in-personConsultation",
        english: " In-person Consultation"
    },

    {
        key: "login_text",
        english: "Login"
    },

    {
        key: "not_account",
        english: "Do not have an account?"
    },
    {
        key: "create_account",
        english: "Create an account here"
    },
    {
        key: 'mobile_number',
        english: "Mobile Number"
    },

    {
        key: 'email_address',
        english: "Email Address"
    },

    {
        key: 'password_text',
        english: "Password"
    },
    {
        key: 'fgorgot_password',
        english: "Forgot Password"
    },

    {
        key: 'forgot_placeholder',
        english: "IC Number / Passport Number / Email"
    },

    {
        key: 'reset_password',
        english: "Reset Password"
    },

    {
        key: 'code_text',
        english: "Code"
    },
    {
        key: 'min_length_validation',
        english: "Min Length must be 8 characters long"
    },
    {
        key: 'submit_button',
        english: "Submit"
    },


    {
        key: 'institute_text',
        english: "Institute"
    },

    {
        key: 'degree_text',
        english: "Degree"
    },

    {
        key: 'invalid_country_code',
        english: "invalid country code"
    },

    {
        key: 'min_length_text',
        english: "Min Length"
    },

    {
        key: 'invalid_email',
        english: "invalid Email"
    },

    {
        key: "consultation_sessions",
        english: "Consultation Sessions"
    },

    {
        key: "upcoming_text",
        english: "Upcoming_text"
    },

    {
        key: 'add_availability',
        english: "Add Availability"
    },

    {
        key: 'schedule_date',
        english: "Schedule Date"
    },

    {
        key: 'end_text',
        english: "End"
    },

    {
        key: 'select_mode_of_consultation',
        english: "Select Mode of Consultation"
    },

    {
        key: 'start_time',
        english: "Start Time"
    },
    {
        key: 'end_time',
        english: "End Time"
    },

    {
        key: 'view_availability',
        english: "View Availability"
    },
    {
        key: 'edit_text',
        english: "Edit"
    },

    {
        key: 'add_user',
        english: "Add User"
    },

    {
        key: 'new_case_note',
        english: "  New Case Note"
    },
    {
        key: 'counsellor_detail',
        english: "Counsellor Detail"
    },

    {
        key: 'user_detail',
        english: "User Detail"
    },

    {
        key: 'hours_of_consultations',
        english: "Hours Of Consultations"
    },

    {
        key: 'case_type',
        english: "Case Type"
    },
    {
        key: 'severity_level',
        english: "Severity Level"
    },

    {
        key: 'client_status',
        english: "Client Status"
    },

    {
        key: 'support_letter',
        english: "Support Letter"
    },

    {
        key: 'notes_text',
        english: "Notes"
    },

    {
        key: 'file_text',
        english: "File"
    },

    {
        key: 'in_draft',
        english: "In Draft"
    },
    {
        key: 'clinical_text',
        english: "Clinical"
    },

    {
        key: 'non-clinical',
        english: "Non-clinical"
    },
    {
        key: 'high_text',
        english: "High"
    },

    {
        key: 'medium_text',
        english: "Medium"
    },

    {
        key: 'Have_you_provided',
        english: "Have you provided any support letter or referral letter to the member?"
    },

    {
        key: 'upload_the_document_for_keeping',
        english: "Upload the document for keeping"
    },

    {
        key: 'add_case_note',
        english: "Add Case Note"
    },

    {
        key: 'pdf_header',
        english: "Depression and Anxiety Stress Scale 21 Assessment Result"
    },

    {
        key: 'pdf_profile_section',
        english: "Profile Details"
    },

    {
        key: 'pdf_result',
        english: "Results"
    },

    {
        key: 'special_character_password',
        english: "Input Password and Submit [8 to 20 characters which contain at least one numeric digit, one uppercase, one lowercase letter and  a special character"
    },
    {
        key: 'reschedule_button',
        english: "Reschedule button"
    },
    {
        key: 'message_text',
        english: "Message"
    },

    {
        key: 'please_contact',
        english: "Please contact to clinic Admin.Email is"
    },
    {
        key: 'reschedule_text',
        english: "Reschedule"
    },

    {
        key: 'do_you_want',
        english: " Do you want to reschedule with other counsellor"
    },

    {
        key: 'pdf_overall_risk',
        english: "Overall Risk"
    },

    {
        key: 'pdf_static_text',
        english: "Your results indicate that anxiety and depression symptoms may be affecting"
    },

    {
        key: 'of_dispression_anxiety_and_stress_symptoms',
        english: "of dispression, anxiety and stress symptoms"
    },
    {
        key: 'no_data',
        english: "No Data"
    },
    {
        key: 'view_appointment',
        english: "View Appointment"
    },

    {
        key: 'add_case_note',
        english: "Add Case Note"
    },

    {
        key: 'edit_Calendar',
        english: "Edit Calendar"
    },

    {
        key: 'booking_cancellation',
        english: "Booking Cancellation"
    },

    {
        key: 'booking_detail',
        english: "Booking Detail"
    },

    {
        key: 'why_you_want_to_cancel',
        english: "Why you want to cancel"
    },

    {
        key: 'cancellation_policy',
        english: " I agree the cancellation policy"
    },
    {
        key: 'cancellation_confirm',
        english: "Cancellation Confirm"
    },

    {
        key: 'reason_text',
        english: "Reason"
    },

    {
        key: 'availabile_date',
        english: "Availabile Date"
    },


    {
        key: 'book_text',
        english: "Book"
    },
    {
        key: 'send_consultation_sessions_link',
        english: "Send Consultation Sessions Link"
    },

    {
        key: 'select_user',
        english: "Select User"
    },

    {
        key: 'mark_as_complete',
        english: "Mark as Complete"
    },
    {
        key: 'Did_the_user_attend_the_session?',
        english: "Did the user attend the session?"
    },

    {
        key: 'edit_text',
        english: "Edit"
    },
    {
        key: ' reschedule_booking',
        english: " Reschedule Booking"
    },
    {
        key: 'our_counselor_ready_text',
        english: 'Our counselor ready to help and support you'
    },
]

const translationModel = { keys, category, catName }
export default translationModel