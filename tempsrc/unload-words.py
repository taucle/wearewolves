import json

# Listes en dur
mots_fr = [
                "bateau", "abeille", "pomme", "policier", "canne à pêche", "cactus", "hôpital", "ordinateur", "livre", "chaise",
                "table", "fenêtre", "porte", "soleil", "lune", "étoile", "nuage", "pluie", "neige", "vent",
                "feu", "eau", "terre", "arbre", "fleur", "herbe", "montagne", "rivière", "lac", "mer",
                "poisson", "oiseau", "chat", "chien", "cheval", "vache", "mouton", "cochon", "poule", "canard",
                "maison", "immeuble", "rue", "ville", "village", "parc", "jardin", "pont", "voiture", "vélo",
                "train", "avion", "bus", "moto", "camion", "route", "chemin", "carte", "téléphone", "horloge",
                "temps", "jour", "nuit", "matin", "soir", "semaine", "mois", "année", "printemps", "été",
                "automne", "hiver", "ami", "famille", "homme", "femme", "enfant", "bébé", "main", "pied",
                "tête", "œil", "oreille", "nez", "bouche", "dent", "cheveux", "corps", "cœur", "estomac",
                "pain", "fromage", "lait", "œuf", "viande", "légume", "fruit", "sucre", "sel", "poivre",
                "couteau", "fourchette", "cuillère", "assiette", "verre", "bouteille", "tasse", "sac", "clé", "montre",
                "lunettes", "chapeau", "chaussures", "vêtement", "pantalon", "robe", "chemise", "jupe", "manteau", "veste",
                "lit", "coussin", "couverture", "oreiller", "drap", "armoire", "tiroir", "miroir", "lampe", "ampoule",
                "mur", "plafond", "sol", "escalier", "ascenseur", "cuisine", "salon", "chambre", "salle de bain", "toilette",
                "jardinier", "mécanicien", "médecin", "infirmière", "professeur", "étudiant", "artiste", "musicien", "cuisinier", "boulanger",
                "bureau", "école", "université", "bibliothèque", "magasin", "supermarché", "boulangerie", "pharmacie", "poste", "banque",
                "cinéma", "théâtre", "musée", "église", "mosquée", "temple", "stade", "piscine", "gymnase", "restaurant",
                "café", "bar", "hôtel", "camping", "plage", "forêt", "désert", "océan", "île", "volcan",
                "terreur", "joie", "tristesse", "colère", "peur", "amour", "haine", "espoir", "rêve", "cauchemar",
                "voix", "son", "musique", "chanson", "silence", "bruit", "image", "photo", "dessin", "peinture",
                "couleur", "rouge", "bleu", "vert", "jaune", "noir", "blanc", "gris", "rose", "violet",
                "sport", "football", "basket-ball", "tennis", "natation", "course", "saut", "danse", "chant", "lecture",
                "écriture", "calcul", "histoire", "géographie", "science", "mathématiques", "physique", "chimie", "biologie", "technologie",
                "ordinateur portable", "tablette", "smartphone", "imprimante", "clavier", "souris", "écran", "casque", "microphone", "appareil photo",
                "batterie", "chargeur", "câble", "prise", "interrupteur", "télécommande", "radio", "télévision", "journal", "magazine",
                "lettre", "email", "message", "conversation", "question", "réponse", "idée", "pensée", "problème", "solution",
                "début", "fin", "milieu", "centre", "côté", "haut", "bas", "devant", "derrière", "gauche",
                "droite", "intérieur", "extérieur", "vitesse", "lenteur", "force", "faiblesse", "paix", "guerre", "liberté",
                "égalité", "justice", "bonheur", "malheur", "chance", "malchance", "vérité", "mensonge", "question", "réponse",
                "lumière", "obscurité", "ombre", "chaleur", "froid", "sec", "humide", "grand", "petit", "long"
            ]

mots_en = [
                "boat", "bee", "apple", "police officer", "fishing rod", "cactus", "hospital", "computer", "book", "chair",
                "table", "window", "door", "sun", "moon", "star", "cloud", "rain", "snow", "wind",
                "fire", "water", "earth", "tree", "flower", "grass", "mountain", "river", "lake", "sea",
                "fish", "bird", "cat", "dog", "horse", "cow", "sheep", "pig", "chicken", "duck",
                "house", "building", "street", "city", "village", "park", "garden", "bridge", "car", "bicycle",
                "train", "airplane", "bus", "motorcycle", "truck", "road", "path", "map", "phone", "clock",
                "time", "day", "night", "morning", "evening", "week", "month", "year", "spring", "summer",
                "autumn", "winter", "friend", "family", "man", "woman", "child", "baby", "hand", "foot",
                "head", "eye", "ear", "nose", "mouth", "tooth", "hair", "body", "heart", "stomach",
                "bread", "cheese", "milk", "egg", "meat", "vegetable", "fruit", "sugar", "salt", "pepper",
                "knife", "fork", "spoon", "plate", "glass", "bottle", "cup", "bag", "key", "watch",
                "glasses", "hat", "shoes", "clothing", "trousers", "dress", "shirt", "skirt", "coat", "jacket",
                "bed", "cushion", "blanket", "pillow", "sheet", "wardrobe", "drawer", "mirror", "lamp", "light bulb",
                "wall", "ceiling", "floor", "stairs", "elevator", "kitchen", "living room", "bedroom", "bathroom", "toilet",
                "gardener", "mechanic", "doctor", "nurse", "teacher", "student", "artist", "musician", "cook", "baker",
                "office", "school", "university", "library", "shop", "supermarket", "bakery", "pharmacy", "post office", "bank",
                "cinema", "theater", "museum", "church", "mosque", "temple", "stadium", "swimming pool", "gym", "restaurant",
                "cafe", "bar", "hotel", "camping", "beach", "forest", "desert", "ocean", "island", "volcano",
                "terror", "joy", "sadness", "anger", "fear", "love", "hate", "hope", "dream", "nightmare",
                "voice", "sound", "music", "song", "silence", "noise", "image", "photo", "drawing", "painting",
                "color", "red", "blue", "green", "yellow", "black", "white", "gray", "pink", "purple",
                "sport", "football", "basketball", "tennis", "swimming", "running", "jumping", "dance", "singing", "reading",
                "writing", "calculation", "history", "geography", "science", "mathematics", "physics", "chemistry", "biology", "technology",
                "laptop", "tablet", "smartphone", "printer", "keyboard", "mouse", "screen", "headphones", "microphone", "camera",
                "battery", "charger", "cable", "socket", "switch", "remote control", "radio", "television", "newspaper", "magazine",
                "letter", "email", "message", "conversation", "question", "answer", "idea", "thought", "problem", "solution",
                "beginning", "end", "middle", "center", "side", "top", "bottom", "front", "back", "left",
                "right", "inside", "outside", "speed", "slowness", "strength", "weakness", "peace", "war", "freedom",
                "equality", "justice", "happiness", "unhappiness", "luck", "bad luck", "truth", "lie", "question", "answer",
                "light", "darkness", "shadow", "heat", "cold", "dry", "wet", "big", "small", "long"
            ]
mots_de = [
                "Boot", "Biene", "Apfel", "Polizist", "Angelrute", "Kaktus", "Krankenhaus", "Computer", "Buch", "Stuhl",
                "Tisch", "Fenster", "Tür", "Sonne", "Mond", "Stern", "Wolke", "Regen", "Schnee", "Wind",
                "Feuer", "Wasser", "Erde", "Baum", "Blume", "Gras", "Berg", "Fluss", "See", "Meer",
                "Fisch", "Vogel", "Katze", "Hund", "Pferd", "Kuh", "Schaf", "Schwein", "Huhn", "Ente",
                "Haus", "Gebäude", "Straße", "Stadt", "Dorf", "Park", "Garten", "Brücke", "Auto", "Fahrrad",
                "Zug", "Flugzeug", "Bus", "Motorrad", "Lastwagen", "Straße", "Weg", "Karte", "Telefon", "Uhr",
                "Zeit", "Tag", "Nacht", "Morgen", "Abend", "Woche", "Monat", "Jahr", "Frühling", "Sommer",
                "Herbst", "Winter", "Freund", "Familie", "Mann", "Frau", "Kind", "Baby", "Hand", "Fuß",
                "Kopf", "Auge", "Ohr", "Nase", "Mund", "Zahn", "Haar", "Körper", "Herz", "Magen",
                "Brot", "Käse", "Milch", "Ei", "Fleisch", "Gemüse", "Obst", "Zucker", "Salz", "Pfeffer",
                "Messer", "Gabel", "Löffel", "Teller", "Glas", "Flasche", "Tasse", "Tasche", "Schlüssel", "Armbanduhr",
                "Brille", "Hut", "Schuhe", "Kleidung", "Hose", "Kleid", "Hemd", "Rock", "Mantel", "Jacke",
                "Bett", "Kissen", "Decke", "Kopfkissen", "Bettlaken", "Kleiderschrank", "Schublade", "Spiegel", "Lampe", "Glühbirne",
                "Wand", "Decke", "Boden", "Treppe", "Aufzug", "Küche", "Wohnzimmer", "Schlafzimmer", "Badezimmer", "Toilette",
                "Gärtner", "Mechaniker", "Arzt", "Krankenschwester", "Lehrer", "Student", "Künstler", "Musiker", "Koch", "Bäcker",
                "Büro", "Schule", "Universität", "Bibliothek", "Geschäft", "Supermarkt", "Bäckerei", "Apotheke", "Post", "Bank",
                "Kino", "Theater", "Museum", "Kirche", "Moschee", "Tempel", "Stadion", "Schwimmbad", "Fitnessstudio", "Restaurant",
                "Café", "Bar", "Hotel", "Camping", "Strand", "Wald", "Wüste", "Ozean", "Insel", "Vulkan",
                "Terror", "Freude", "Traurigkeit", "Wut", "Angst", "Liebe", "Hass", "Hoffnung", "Traum", "Albtraum",
                "Stimme", "Klang", "Musik", "Lied", "Stille", "Geräusch", "Bild", "Foto", "Zeichnung", "Gemälde",
                "Farbe", "Rot", "Blau", "Grün", "Gelb", "Schwarz", "Weiß", "Grau", "Rosa", "Lila",
                "Sport", "Fußball", "Basketball", "Tennis", "Schwimmen", "Laufen", "Springen", "Tanz", "Singen", "Lesen",
                "Schreiben", "Rechnen", "Geschichte", "Geographie", "Wissenschaft", "Mathematik", "Physik", "Chemie", "Biologie", "Technologie",
                "Laptop", "Tablet", "Smartphone", "Drucker", "Tastatur", "Maus", "Bildschirm", "Kopfhörer", "Mikrofon", "Kamera",
                "Batterie", "Ladegerät", "Kabel", "Steckdose", "Schalter", "Fernbedienung", "Radio", "Fernseher", "Zeitung", "Magazin",
                "Brief", "E-Mail", "Nachricht", "Gespräch", "Frage", "Antwort", "Idee", "Gedanke", "Problem", "Lösung",
                "Anfang", "Ende", "Mitte", "Zentrum", "Seite", "Oben", "Unten", "Vorne", "Hinten", "Links",
                "Rechts", "Innen", "Außen", "Geschwindigkeit", "Langsamkeit", "Stärke", "Schwäche", "Frieden", "Krieg", "Freiheit",
                "Gleichheit", "Gerechtigkeit", "Glück", "Unglück", "Glück", "Pech", "Wahrheit", "Lüge", "Frage", "Antwort",
                "Licht", "Dunkelheit", "Schatten", "Hitze", "Kälte", "Trocken", "Feucht", "Groß", "Klein", "Lang"
            ]

# Construction de la structure
data = [
    {"id": en, "fr": fr, "en": en, "de": de}
    for fr, en, de in zip(mots_fr, mots_en, mots_de)
]

# Sauvegarde en JSON
with open("traductions.json", "w", encoding="utf-8") as f:
    lignes = [json.dumps(d, ensure_ascii=False) for d in data]
    f.write("[\n  " + ",\n  ".join(lignes) + "\n]")