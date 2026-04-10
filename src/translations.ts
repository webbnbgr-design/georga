export type Language = 'el' | 'en';

export const translations = {
  el: {
    nav: {
      home: 'Αρχική',
      services: 'Υπηρεσίες',
      testimonials: 'Κριτικές',
      contact: 'Επικοινωνία',
    },
    hero: {
      title: 'Νομική Εκπροσώπηση με Μεθοδικότητα & Επιμονή',
      subtitle: 'Εξειδικευμένες λύσεις στο Τραπεζικό Δίκαιο, το Δίκαιο Αλλοδαπών και τις Αστικές Υποθέσεις.',
      cta: 'Προγραμματίστε μια Συνάντηση',
    },
    services: {
      title: 'Τομείς Εξειδίκευσης',
      banking: {
        title: 'Τραπεζικό Δίκαιο',
        desc: 'Προστασία δανειοληπτών, ρύθμιση οφειλών και νομική υποστήριξη σε τραπεζικές διαφορές.',
      },
      immigration: {
        title: 'Δίκαιο Αλλοδαπών',
        desc: 'Άδειες διαμονής, Golden Visa και νομική καθοδήγηση για διεθνείς πελάτες.',
      },
      traffic: {
        title: 'Τροχαία Ατυχήματα',
        desc: 'Διεκδίκηση αποζημιώσεων και διαχείριση αστικής ευθύνης από οδικά ατυχήματα.',
      },
      realestate: {
        title: 'Νομικοί Έλεγχοι Ακινήτων',
        desc: 'Έλεγχος τίτλων και νομική υποστήριξη σε αγοραπωλησίες ακινήτων.',
      },
    },
    testimonials: {
      title: 'Η Φωνή των Πελατών',
      items: [
        {
          quote: 'Απίστευτη μεθοδικότητα και υπομονή. Η οργάνωση του γραφείου είναι υποδειγματική.',
          author: 'Ιωάννης Π.'
        },
        {
          quote: 'Εξαιρετική επαγγελματίας με βαθιά γνώση του αντικειμένου. Μας βοήθησε ουσιαστικά σε μια δύσκολη τραπεζική υπόθεση.',
          author: 'Μαρία Κ.'
        },
        {
          quote: 'Άμεση ανταπόκριση και ειλικρίνεια. Αισθανθήκαμε ασφάλεια από την πρώτη στιγμή της συνεργασίας μας.',
          author: 'Γιώργος Λ.'
        }
      ]
    },
    contact: {
      title: 'Επικοινωνία',
      address: 'Ύδρας 4, Νέο Ψυχικό',
      phone: '694 718 1556',
      email: 'mgeorga.law@gmail.com', // Placeholder if not provided
      cta: 'Επικοινωνήστε Άμεσα',
    },
    footer: {
      rights: 'Όλα τα δικαιώματα διατηρούνται.',
      bar: 'Μέλος Δικηγορικού Συλλόγου Αθηνών',
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    hero: {
      title: 'Legal Representation with Method & Persistence',
      subtitle: 'Specialized solutions in Banking Law, Immigration Law, and Civil Cases.',
      cta: 'Schedule a Meeting',
    },
    services: {
      title: 'Areas of Expertise',
      banking: {
        title: 'Banking Law',
        desc: 'Debtor protection, debt settlement, and legal support in banking disputes.',
      },
      immigration: {
        title: 'Immigration Law',
        desc: 'Residence permits, Golden Visa, and legal guidance for international clients.',
      },
      traffic: {
        title: 'Traffic Accidents',
        desc: 'Compensation claims and management of civil liability from road accidents.',
      },
      realestate: {
        title: 'Real Estate Legal Checks',
        desc: 'Title checks and legal support in real estate transactions.',
      },
    },
    testimonials: {
      title: 'Client Testimonials',
      items: [
        {
          quote: 'Incredible methodology and patience. The office organization is exemplary.',
          author: 'John P.'
        },
        {
          quote: 'Excellent professional with deep knowledge of the subject. She helped us significantly in a difficult banking case.',
          author: 'Maria K.'
        },
        {
          quote: 'Immediate response and honesty. We felt safe from the first moment of our cooperation.',
          author: 'George L.'
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      address: 'Hydras 4, Neo Psychiko',
      phone: '694 718 1556',
      email: 'mgeorga.law@gmail.com',
      cta: 'Contact Directly',
    },
    footer: {
      rights: 'All rights reserved.',
      bar: 'Member of the Athens Bar Association',
    }
  }
};
