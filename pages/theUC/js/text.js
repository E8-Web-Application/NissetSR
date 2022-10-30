const text = [
    {
        text: 'សាកលវិទ្យាល័យកម្ពុជាបានផ្តល់អាហារូបករណ៍រាប់ពាន់កន្លែងដល់និស្សិត ទាំងថ្នាក់បរិញ្ញាបត្រ និងបរិញ្ញាបត្រចាប់តាំងពីការបង្កើតឡើងក្នុងឆ្នាំ 2003។ ការិយាល័យអាហារូបករណ៍គ្រប់គ្រងនិងត្រួតពិនិត្យអាហារូបករណ៍របស់សាកលវិទ្យាល័យដោយសហការជាមួយការិយាល័យផ្សេងទៀត និងអង្គភាព UC ។ ការប្រឡងត្រូវបានផ្តល់ជូនជារៀងរាល់ឆ្នាំនិងគ្របដណ្តប់ទាំងភាសាអង់គ្លេសនិងចំណេះដឹងទូទៅហើយសិស្សកំពូលៗទទួលបានការសិក្សាដោយឥតគិតថ្លៃសម្រាប់រយៈពេលនៃកម្មវិធីរបស់ពួកគេ។អាហារូបករណ៍ខ្លួនគេដាក់ឈ្មោះថា អាហារូបករណ៍សម្ដេចតេជោ ហ៊ុន សែន Vision- 100 ដោយមានព្រះសង្ឃផ្សេងៗទៀតដែលភ្ជាប់មកជាមួយអាស្រ័យលើម្ចាស់ជំនួយ។ អ្នកឧបត្ថម្ភសម្រាប់អាហារូបករណ៍ពិសេសទាំងនេះរួមមាន លោកបណ្ឌិត Haruhisa Handaលោកបណ្ឌិត Rikhi Thakralលោក Paul Heng និងក្រុមហ៊ុន China Fairwind ប្រទេសកម្ពុជា។ អាហារូបករណ៍ផ្សេងទៀតត្រូវបានផ្តល់ដោយក្រុមហ៊ុន Khmer Brewery Cambodia Advance Communicationsនិង The University of Cambodia។ សិស្សUCជាច្រើនរយនាក់ទៀតបានទទួលអាហារូបករណ៍ផ្ទាល់ខ្លួនដែលមានន័យថាម្ចាស់ជំនួយឯកជនបានផ្តល់មូលនិធិដល់ការអប់រំរបស់ពួកគេនៅ UC ជាពិសេស ហើយមិនតម្រូវឱ្យមានការប្រឡងអាហារូបករណ៍ទេ។សម្រាប់ឆ្នាំសិក្សា 2017 - 2018 សាកលវិទ្យាល័យបានផ្តល់អាហារូបករណ៍ជាច្រើនរយ ហៅថា ទស្សនៈវិស័យរបស់សម្តេចតេជោ ហ៊ុន សែន 500 អាហារូបករណ៍ - 2017 ហើយសម្រាប់ឆ្នាំសិក្សា 2018 - 2019 សាកលវិទ្យាល័យ UC បានរៀបចំការប្រឡងយ៉ាងតឹងរ៉ឹងសម្រាប់អាហារូបករណ៍ក្រោមឈ្មោះថា ចក្ខុវិស័យរបស់សម្តេចតេជោ ហ៊ុន សែន ឆ្នាំ២០៣០។ នៅឆ្នាំ 2021 UC កំពុងផ្តល់អាហារូបករណ៍ចំនួន 500 ក្រោម UC Peace Scholarships 2021 - 2025 ហើយអ្នកទទួលនឹងត្រូវបានជ្រើសរើសម្តងទៀតដោយការប្រលងប្រជែង។',
    }
]
const texts = document.getElementById('text');
texts.innerHTML = `${text.map((val) => {
    return `<p>${val.text}</p>`
}).join(" ")
    }`;

const paragrap = [
    {
        text: "The University of Cambodia (often referred to as UC for short; Khmer: សាកលវិទ្យាល័យកម្ពុជា, is a private university located on Northbridge Road in Sen Sok District, Phnom Penh, Kingdom of Cambodia. Founded in 2003 by Dr. Kao Kim Hourn, Minister Delegate to the Prime Minister of the Kingdom of Cambodia, and Dr. Haruhisa Handa, Founder and Chairman of the International Foundation for Arts and Culture. UC is accredited by the Royal Government of Cambodia and the Accreditation Committee of Cambodia, and is a member of the Cambodian Higher Education Association. The University of Cambodia is organized to provide Foundation Year, Associate's, Bachelor's, Master's and Doctoral programs through its twelve colleges and schools: the College of Arts and Humanities, the College of Education, the College of Law, the College of Media and Communications, the College of Science and Technology, the College of Social Sciences, the School of Creative Arts, the School of Foreign Languages, the Techo Sen School of Government and International Relations, and The Tony Fernandes School of Business (formerly the College of Management). Additionally, the School of Graduate Studies oversees the university's graduate programs, and the School of Undergraduate Studies manages the undergraduate programs. As a model, the University of Cambodia uses the credit-based system that is used in the United States, and the programs are taught through the medium of the English language. In 2013, the University launched the Khmer Track, which offers the same UC programs, but taught in the medium of the Khmer (Cambodian) language. UC subsequently renamed the existing English language programs the International Track.",
    }
]
const paragraps = document.getElementById('paragrap');
paragraps.innerHTML = `${paragrap.map((val) => {
    return `<p>${val.text}</p>`
}).join(" ")
    }`;
