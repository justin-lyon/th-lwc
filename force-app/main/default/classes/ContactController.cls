public with sharing class ContactController {

	@AuraEnabled(cacheable=true)
	public static List<Contact> getContacts () {
		throw new AuraHandledException('Forced Exception.');
		// return [
		// 	SELECT Id,
		// 		FirstName,
		// 		LastName,
		// 		Email
		// 	FROM Contact
		// 	WITH SECURITY_ENFORCED
		// 	ORDER BY LastName
		// 	LIMIT 200];
	}
}
